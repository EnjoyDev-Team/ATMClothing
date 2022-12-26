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
    const filter = { user: req.query.idUser };

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
        product.facility = product.idProduct.facility;
        product.instock = product.idProduct.amount;
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
  const features = new APIFeatures(Order.find(), req.query)
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

    const user = await User.findOne({ _id: data.idUser }).exec();
    if (!user) {
        return next(new AppError('There is not user with this id', 404));
    }

    for (const el of data.products) {
        const product = await products.findOne({ _id: el.idProduct }).exec();
        if (el.amount <= 0 || product.amount < el.amount) {
            check = true;
            return next(new AppError(`${product.name}: Số lượng sản phẩm trong kho không đủ!`, 404));
        }
    }

    // REDUCE THE AMOUNT OF PRODUCTS AFTER ORDER SUCCESSFULLY 
    // (RUN PRODUCTION)
    // for (const el of data.products) {
    //     const product = await products.findOne({ _id: el.idProduct }).exec();
    //     const amount = product.amount - el.amount;
    //     await products.findOneAndUpdate({ _id: el.idProduct }, {
    //         amount
    //     });
    // }

    const doc = await Order.create(data);

    res.status(201).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
});

exports.updateStatus = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const status = req.body.status;

    const order = await Order.findOneAndUpdate({ _id: id }, { status }, {
        new: true,
        runValidators: true,
      });

    if (!order) {
        return next(new AppError('There is not order with this id', 404));
    }

    res.status(200).json({
        status: 'success',
        data: order
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