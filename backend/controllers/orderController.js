const crypto = require('crypto');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Order = require('../models/orderModel');
const User = require('../models/userModel');
const products = require('../models/productModel');
const APIFeatures = require('../utils/apiFeature');
const imageEncode = require('../utils/imageEncode');
const { statusEnum, receiveEnum, paymentEnum } = require('../constants/orderConstants');

exports.getAllOrders = catchAsync(async (req, res, next) => {
    const filter = { user: req.body.idUser };

    const features = new APIFeatures(Order.find(filter)).filter().sort().limitFields().paginate();
    const doc = await features.query;

    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
            data: doc,
        },
    });
});

module.exports.getById = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Order.findOne({ _id: req.params.id })).limitFields();

    const order = await features.query;

    order.products.map((product) => {
        const id = product.idProduct._id;
        product.name = product.idProduct.name;
        product.price = product.idProduct.price;
        product.img = product.idProduct.img;
        product.idProduct = id;
        product._id = null;
    });

    const newproducts = imageEncode(order.products);

    res.status(200).json({
        status: 'success',
        data: order,
    });
});

module.exports.filter = catchAsync(async (req, res, next) => {
  const filter = { user: req.body.idUser };
  const features = new APIFeatures(Order.find(filter), req.query)
                      .filter()
                      .sort()
                      .limitFields()
                      .paginate();

  const doc = await features.query;

    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
            data: doc,
        },
    });
});

exports.createOrder = catchAsync(async (req, res, next) => {
    const data = req.body;

    const user = await User.findOne({ _id: data.user }).exec();
    if (!user) {
        return next(new AppError('There is not user with this id', 404));
    }

    data.products.map(async (el) => {
        const product = await products.findOne({ _id: el.idProduct }).exec();
        if (el.amount <= 0 || product.amount < el.amount) {
            return next(new AppError('Number of invalid products', 404));
        }
    });

    const doc = await Order.create(data);

    res.status(201).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
});


exports.getEnumList = catchAsync(async (req, res, next) => {
  res.status(200).json({
      status: 'success',
      data: {
          statusEnum,
          receiveEnum,
          paymentEnum
      },
  });
});