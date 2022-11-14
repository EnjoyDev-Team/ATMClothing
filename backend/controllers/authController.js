const crypto = require('crypto');
const { promisify } = require('util');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
// const Email = require('../utils/email');
const jwt = require('jsonwebtoken');

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

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const refreshToken = signToken(user._id, 'refresh');

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  // SAVE REFRESH TOKEN TO DB

  
  // Remove password from output
  user.password = undefined;

  res.cookie('jwt', refreshToken, cookieOptions);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.refreshToken = catchAsync(async (req, res) => {
  const cookies = req.cookies;

  // 1) Check if phone and password exist
  if (!cookies?.jwt) {
    return next(new AppError('', 401));
  }
  const refreshToken = cookies.jwt;

  // 2) Check if user exists && password is correct
  const user = await User.findOne({ refreshToken }).select('+password');

  if (!user) {
    return next(new AppError('Forbidden', 403));
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err || user.id !== decoded.id) {
        return next(new AppError('Forbidden', 403));
      }
      const accessToken = signToken(decoded.id);
      res.status(200).json({
        accessToken
      })
    }
  )
});

// exports.signup = catchAsync(async (req, res, next) => {
//   const newUser = await User.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     passwordConfirm: req.body.passwordConfirm,
//   });
//   const url = `${req.protocol}://${req.get('host')}/me`;
//   await new Email(newUser, url).sendWelcome();

//   createSendToken(newUser, 201, res);
// });

exports.login = catchAsync(async (req, res, next) => {
  const { phone, password } = req.body;

  // 1) Check if phone and password exist
  if (!phone || !password) {
    return next(new AppError('Please provide phone and password', 400));
  }

  // 2) Check if user exists && password is correct
  const user = await User.findOne({ phone }).select('+password');

  if (!user 
    // || !(await user.correctPassword(password, user.password))
    ) {
    return next(new AppError('Incorrect phone or password', 401));
  }

  // 3) If everything ok, send token to client
  createSendToken(user, 200, res);
});

exports.logout = catchAsync(async (req, res) => {
  const cookies = req.cookies;

  // 1) Check if phone and password exist
  if (!cookies?.jwt) {
    return next(new AppError('Cookies is not found!', 204));
  }
  const refreshToken = cookies.jwt;

  // 2) Check if user exists && password is correct
  const user = await User.findOne({ refreshToken }).select('+password');

  if (!user) {
    res.clearCookie('jwt', { httpOnly: true })
    return next(new AppError('Forbidden', 403));
  }

  // const otherUsers = await User.filter(person => persion.refreshToken !== user.refreshToken);
  user.refreshToken = '',
  await user.save();

  res.clearCookie('jwt', { httpOnly: true }) // secure: true - only servers on https

  res.status(200).json({ status: 'success' });
}) ;

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
  res.locals.user = currentUser;
  next();
});

// Only for rendered pages, no errors!
// exports.isLoggedIn = async (req, res, next) => {
//   if (req.cookies.jwt) {
//     try {
//       // 1) Verify token
//       const decoded = await promisify(jwt.verify)(
//         req.cookies.jwt,
//         process.env.JWT_SECRET
//       );

//       // 2) Check user still exists
//       const currentUser = await User.findById(decoded.id);
//       if (!currentUser) {
//         return next();
//       }

//       // 3) Check if changed password after the token was issued
//       if (currentUser.changedPasswordAfter(decoded.iat)) {
//         return next();
//       }

//       // THERE IS A LOGGED IN USER
//       res.locals.user = currentUser;
//       return next();
//     } catch (err) {
//       return next();
//     }
//   }
//   next();
// };

// exports.restrictTo =
//   (...roles) =>
//   (req, res, next) => {
//     // roles ['admin', 'lead-guide']. role='user'
//     if (!roles.includes(req.user.role)) {
//       console.log('aaa');
//       return next(
//         new AppError('You do not have permission to oerform this action', 403)
//       );
//     }

//     next();
//   };

// exports.forgotPassword = catchAsync(async ( req, res, next) => {
//   // 1) Get user based on POSTed email
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) {
//     return next(new AppError('There is no user with email address', 404));
//   }

//   // 2) Generate the random reset token
//   const resetToken = user.createPasswordResetToken();
//   await user.save({ validateBeforeSave: false });

//   // const message = `Forgot your password? Submit a PATCH request with your new password and
//   //   passwordConfirm to ${resetURL}. \nIf you didn't forget your password, please ignore this email!`;

//   // 3) Send it to user's email
//   try {
//     // await sendEmail({
//     //   email: user.email,
//     //   subject: 'Your password reset token (valid for 10 min)',
//     //   message
//     // });

//     const resetURL = `${req.protocol}://${req.get(
//       'host'
//     )}/api/v1/users/resetPassword/${resetToken}`;
//     await new Email(user, resetURL).sendPasswordReset();

//     res.status(200).json({
//       status: 'success',
//       message: 'Token sent to email!',
//     });
//   } catch (err) {
//     user.passwordResetToken = undefined;
//     user.passwordResetExpires = undefined;
//     await user.save({ validateBeforeSave: false });

//     return next(
//       new AppError(
//         'There was an error sending the email. Try again later!',
//         500
//       )
//     );
//   }
// });

// exports.resetPassword = catchAsync(async (req, res, next) => {
//   // 1) Get user based on the token
//   const hashedToken = crypto
//     .createHash('sha256')
//     .update(req.params.token)
//     .digest('hex');

//   const user = await User.findOne({
//     passwordResetToken: hashedToken,
//     passwordResetExpires: { $gt: Date.now() },
//   });

//   // 2) If token has not expired, and there is user, set the new password
//   if (!user) {
//     return next(new AppError('Token is invalid or has expired', 400));
//   }
//   user.password = req.body.password;
//   user.passwordConfirm = req.body.passwordConfirm;
//   user.passwordResetToken = undefined;
//   user.passwordResetExpires = undefined;
//   await user.save();

//   // 3) update changedPasswordAt property for the user
//   // 4) Log the user in, send JWT
//   createSendToken(user, 200, res);
// });

// exports.updatePassword = catchAsync(async (req, res, next) => {
//   // 1) Get user from colection
//   const user = await User.findById(req.user.id).select('+password');

//   // 2) Check if current password is correct
//   if (!user.correctPassword(req.body.passwordCurrent, user.password)) {
//     return next(new AppError('Your current password is wrong.', 401));
//   }

//   // 3) If so, update password
//   user.password = req.body.password;
//   user.passwordConfirm = req.body.passwordConfirm;
//   await user.save();

//   // 4) Log user in, send JWT
//   createSendToken(user, 200, res);
// });
