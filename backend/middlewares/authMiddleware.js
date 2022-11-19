const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../models/userModel');

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError('You are not log in! Please log in to get access!', 401)
    );
  }

  // 2) Varification token
  const decoded = await promisify(jwt.verify)(token, process.env.ACCESS_TOKEN_SECRET);

  // 3) Check user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist.',
        401
      )
    );
  }

  // 4) Check if changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again!', 401)
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
});

exports.restrictTo =
  (...roles) =>
    (req, res, next) => {
      // roles ['admin', 'lead-guide']. role='user'
      if (!roles.includes(req.user.role)) {
        return next(
          new AppError('You do not have permission to oerform this action', 403)
        );
      }

    next();
  };

exports.tokenPhone = catchAsync(async (req, res, next) => {
  const { phone } = req?.body;

  if (!phone) {
    return next(new AppError('Please provide a mobile phone', 400));
  }

  const token = jwt.sign(
    {phone},
    process.env.OTP_TOKEN_SECRET,
    {expiresIn: '1d'}
  )

  res.status(200).json({
    status: 'success',
    token
  })
});

exports.tokenOTP = catchAsync(async (req, res, next) => {
  const { phone, result, token } = req?.body;

  if (!phone || !result || !token) {
    return next(new AppError('Please provide a mobile phone, a result and a token!', 400));
  }

  jwt.verify(
    token,
    process.env.OTP_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        return next(new AppError('Error to verify phone', 401));
      }
      if (phone !== decoded.phone) {
        return next(new AppError('A number phone is invalid!', 401));
      }

      const tokenResult = jwt.sign(
        {result},
        process.env.OTP_TOKEN_SECRET,
        {expiresIn: '1d'}
      )
    
      res.status(200).json({
        status: 'success',
        token: tokenResult
      })
    }
  )
});

exports.getUser = catchAsync(async (req, res, next) => {
  const { phone } = req?.body;

  if (!phone) {
    return next(new AppError('Please provide a mobile phone', 400));
  }

  const user = await User.findOne({ phone: phone });
  if (!user) {
    return next(new AppError('There is not user with phone address', 404));
  }
  const token = jwt.sign(
    {phone},
    process.env.OTP_TOKEN_SECRET,
    {expiresIn: '1d'}
  )

  res.status(200).json({
    status: 'success',
    token
  })
});