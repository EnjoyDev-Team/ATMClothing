const crypto = require('crypto');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { promisify } = require('util');
const fs = require('fs');
const jwt = require('jsonwebtoken'); 
const firebase = require('../configs/firebase');

const cookieOptions = {
  expires: new Date(
    Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
  ),
  httpOnly: true,
  sameSite: 'None',
  secure: true
};

const base64_encode = (path, root = '') => {
  const ext = path.substring(path.lastIndexOf('.')).split('.')[1];
  const base64 = fs.readFileSync(`${root}${path}`, 'base64');

  return `data:${ext};base64,${base64}`;
};

const signToken = (phone, expires = null) => 
  jwt.sign(
    { phone }, 
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
  
  const token = signToken(user.phone);
  const newRefreshToken = signToken(user.phone, 'refresh');

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
    access_token: token,
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
      if (err || user.phone !== decoded.phone) {
        return next(new AppError('Forbidden', 403));
      }

      // Refresh token was still valid
      const role = Object.values(user.role);
      const accessToken = signToken(decoded.phone);
      const newRefreshToken = signToken(decoded.phone, 'refresh');

      user.refreshToken = [...newRefreshTokenArray, newRefreshToken];
      const result = await user.save();
      
      res.cookie('jwt', newRefreshToken, cookieOptions);

      res.status(200).json({
        status: "success",
        access_token: accessToken
      })
    }
  )
});

// SIGNUP
exports.signup = catchAsync(async (req, res, next) => {
  const {phone, password, tokenVerify, tokenFirebase} = req?.body;
  if (!phone || !tokenFirebase || !tokenVerify || !password) {
    return next(new AppError('Please provide a mobile phone, a result and a token!', 400));
  }
  
  const decodedPhone = await promisify(jwt.verify)(tokenVerify, process.env.PHONE_TOKEN_SECRET);
  const decodedFirebase = await firebase.auth().verifyIdToken(tokenFirebase);
  
  if (decodedPhone?.phone.substring(1) !== decodedFirebase?.phone_number.substring(3)) {
    return next(new Error('Phone number is invalid with the phone varification', 401));
  }

  const avatar = base64_encode(`assets/avatars/${parseInt(Math.random() * 10 % 8 + 1, 10)}.png`);

  const newUser = await User.create({
    phone,
    password,
    photo: avatar
  });
    
  createSendToken(newUser, 201, req, res);
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
  const {phone, password, tokenVerify, tokenFirebase} = req?.body;
  if (!phone || !tokenFirebase || !tokenVerify || !password) {
    return next(new AppError('Please provide a mobile phone, a result and a token!', 400));
  }

  const user = await User.findOne({ phone: req.body.phone });

  if (!user) {
    return next(new AppError('There is not user with this phone', 404));
  }
  
  const decodedPhone = await promisify(jwt.verify)(tokenVerify, process.env.PHONE_TOKEN_SECRET);
  const decodedFirebase = await firebase.auth().verifyIdToken(tokenFirebase);
  
  if (decodedPhone?.phone.substring(1) !== decodedFirebase?.phone_number.substring(3)
    || decodedPhone.phone !== user.phone) {
    return next(new Error('Phone is invalid with the phone verification', 401));
  }

  user.password = password;
  await user.save();
    
  createSendToken(user, 201, req, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from colection
  const user = await User.findOne({phone: req.body.phone}).select('+password');
  // 2) Check if current password is correct
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
