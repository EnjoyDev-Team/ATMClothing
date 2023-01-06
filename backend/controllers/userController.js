const crypto = require('crypto');
const fs = require('fs');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Order = require('../models/orderModel');
const User = require('../models/userModel');
const products = require('../models/productModel');
const APIFeatures = require('../utils/apiFeature');
const imageEncode = require('../utils/imageEncode');
const Email = require('../utils/email');
const { statusEnum, receiveEnum, paymentEnum } = require('../constants/orderConstants');

const base64_encode = (path, root = '') => {
  const ext = path.substring(path.lastIndexOf('.')).split('.')[1];
  const base64 = fs.readFileSync(`${root}${path}`, 'base64');

  return `data:${ext};base64,${base64}`;
};

module.exports.getById = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(User.findOne({ _id: req.params.id })).limitFields();

    const user = await features.query;

    res.status(200).json({
        status: 'success',
        data: user,
    });
});

module.exports.filter = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(User.find(), req.query)
                      .filter()
                      .sort()
                      .limitFields()
                      .paginate();

  const doc = await features.query;

    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: doc
    });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const {phone, email, role, name, gender, address, dob, active, avatar} = req?.body;
  if (!phone || !email) {
    return next(new AppError('Please provide a mobile phone and email to send a random password!', 400));
  }

  const user = await User.findOne({phone});
  if (user) {
    return next(new AppError('The number phone had an account!', 400));
  }

  const photo = avatar || base64_encode(`assets/avatars/${parseInt(Math.random() * 10 % 8 + 1, 10)}.png`);

  let password = '';
  for (let i = 0; i < 8; i++) {
    password += Math.floor(Math.random()*10)
  }

  const newUser = await User.create({
    phone, 
    email, 
    role, 
    name, 
    gender, 
    address, 
    dob, 
    active,
    password,
    photo
  });

  // Send account to email
  try {
    await new Email(newUser).sendWelcome(phone, password);

    res.status(200).json({
      status: 'success',
      message: 'Password sent to email!',
      data: newUser
    });
  } catch (err) {
    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const userId = req.params.id;
  const data = req?.body;

  const user = await User.findOne({_id: userId});
  if (!user) {
    return next(new AppError('There is not accout with this id!', 400));
  }
  const newUser = await User.findByIdAndUpdate(userId, data, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
      status: 'success',
      data: newUser
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const doc = await User.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No document found with that ID', 404))
  }

  res.status(204).json({
      status: 'success',
      data: null
  });
});