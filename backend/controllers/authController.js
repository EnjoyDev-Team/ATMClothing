const crypto = require('crypto');
const { promisify } = require('util');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const jwt = require('jsonwebtoken');

const cookieOptions = {
  expires: new Date(
    Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
  ),
  httpOnly: true,
  sameSite: 'None'
};

const signToken = (id, expires = null) =>
  jwt.sign(
    { id }, 
    !expires 
      ? process.env.ACCESS_TOKEN_SECRET
      : process.env.REFRESH_TOKEN_SECRET, 
    { 
      expiresIn: !expires 
      ? process.env.JWT_EXPIRES_IN 
      : process.env.JWT_EXPIRES_IN_REFRESH 
    }
  );

const createSendToken = async (user, statusCode, req, res) => {
  const cookies = req?.cookies;
  
  const token = signToken(user._id);
  const newRefreshToken = signToken(user._id, 'refresh');

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  // Save refresh token to DB
  const newRefreshTokenArray = 
    !cookies?.jwt
    ? user.refreshToken
    : user.refreshToken.filter(rt => rt !== cookies.jwt);
  
  if (cookies?.jwt) {
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
  }
  user.refreshToken = [...newRefreshTokenArray, newRefreshToken];
  
  const result = await user.save();
  
  // Remove password from output
  user.password = undefined;
  user.refreshToken = undefined;

  res.cookie('jwt', newRefreshToken, cookieOptions);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

// REFRESH TOKEN
exports.refreshToken = catchAsync(async (req, res, next) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return next(new AppError('Forbidden', 401));
  }
  const refreshToken = cookies.jwt;
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })

  const user = await User.findOne({ refreshToken }).select('+password');

  // Detected refresh token reuse!
  if (!user) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return next(new AppError('Forbidden', 403));
        const hackedUser = await User.findOne({ id: decoded.id }).exec();
        hackedUser.refreshToken = []
        const result = hackedUser.save();
      }
    )

    return next(new AppError('Forbidden', 403));
  }

  const newRefreshTokenArray = user.refreshToken.filter(rt => rt !== refreshToken);

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        user.refreshToken = [...newRefreshTokenArray];
        const result = await user.save();
      }
      if (err || user.id !== decoded.id) {
        return next(new AppError('Forbidden', 403));
      }

      // Refresh token was still valid
      const role = Object.values(user.role);
      const accessToken = signToken(decoded.id);
      const newRefreshToken = signToken(decoded.id, 'refresh');

      user.refreshToken = [...newRefreshTokenArray, newRefreshToken];
      const result = await user.save();

      res.cookie('jwt', newRefreshToken, cookieOptions);

      res.status(200).json({
        status: "success",
        accessToken
      })
    }
  )
});

// SIGNUP
exports.signup = catchAsync(async (req, res, next) => {
  const {phone, password, token, result} = req?.body;
  if (!phone || !result || !token || !password) {
    return next(new AppError('Please provide a mobile phone, a result and a token!', 400));
  }

  const user = await User.findOne({ phone: req.body.phone });
  if (user) {
    return next(new AppError('There was a account with this a phone!', 401));
  }

  jwt.verify(
    token,
    process.env.OTP_TOKEN_SECRET,
    async (err, decoded) => {   
      if (err) {
        return next(new AppError('Error to verify OTP result', 401));
      }
      if (result !== decoded.result) {
        return next(new AppError('OTP result is invalid!', 401));
      }

      const newUser = await User.create({
        phone,
        password
      });
    
      createSendToken(newUser, 201, req, res);
    }
  )
});

// LOGIN
exports.login = catchAsync(async (req, res, next) => {
  const { phone, password } = req.body;

  // 1) Check if phone and password exist
  if (!phone || !password) {
    return next(new AppError('Please provide phone and password', 400));
  }

  // 2) Check if user exists && password is correct
  const user = await User.findOne({ phone }).select('+password');
  
  if (!user 
    || !(await user.correctPassword(password, user.password))
    ) {
    return next(new AppError('Incorrect phone or password', 401));
  }

  // 3) If everything ok, send token to client
  createSendToken(user, 200, req, res);
});

// LOGOUT
exports.logout = catchAsync(async (req, res, next) => {
  const cookies = req.cookies;
  
  // 1) Check if phone and password exist
  if (!cookies?.jwt) {
    return next(new AppError('Cookies is not found', 204));
  }
  const refreshToken = cookies.jwt;
  
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ refreshToken }).select('+password');
  
  if (!user) {
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    return next(new AppError('Forbidden', 403));
  }

  user.refreshToken = user.refreshToken.filter(rt => rt !== refreshToken);
  const result = await user.save();

  res.clearCookie('jwt', { httpOnly: true }) // secure: true - only servers on https

  res.status(200).json({ status: 'success' });
});

// FORGOT PASSWORD
exports.forgotPassword = catchAsync(async ( req, res, next) => {
  const {phone, password, token, result} = req?.body;
  if (!phone || !result || !token || !password) {
    return next(new AppError('Please provide a mobile phone, a result and a token!', 400));
  }

  const user = await User.findOne({ phone: req.body.phone });
  
  jwt.verify(
    token,
    process.env.OTP_TOKEN_SECRET,
    async (err, decoded) => {   
      if (err) {
        return next(new AppError('Error to verify OTP result', 401));
      }
      if (result !== decoded.result) {
        return next(new AppError('OTP result is invalid!', 401));
      }

      user.password = password;
    
      createSendToken(user, 201, req, res);
    }
  )
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from colection
  const user = await User.findOne({phone: req.body.phone}).select('+password');
  // 2) Check if current password is correct
  console.log(req.body);
  if (!user 
    || !(await user.correctPassword(req.body.passwordCurrent, user.password))
    ) {
    return next(new AppError('Incorrect current password', 401));
  }

  // 3) If so, update password
  user.password = req.body.password;
  await user.save();

  // 4) Log user in, send JWT
  createSendToken(user, 200, req, res);
});