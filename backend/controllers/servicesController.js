const { sellModel, customModel, orderModel, donateModel } = require('../models/serviceModel');
const User = require('../models/userModel')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const slugify = require('slugify');
const APIFeatures = require('../utils/apiFeature');
const socketIO = require('../server');

module.exports.getSellProducts = catchAsync(async (req, res, next) => {
    const sellProductList = await sellModel.find({ uid: req.user._id }).sort({ create_at: 'desc' });

    res.status(200).json({
        status: 'success',
        data: {
            products: sellProductList,
        },
    });
});

module.exports.addSellProduct = catchAsync(async (req, res, next) => {
    const { product } = req.body;
    product.slug = slugify(product.category, { lower: true });

    const newproduct = await sellModel.create(product);

    res.status(201).json({
        status: 'success',
        message: 'Product added successfully',
        data: {
            product: newproduct,
        },
    });
});

module.exports.removeSellProduct = catchAsync(async (req, res, next) => {

    const config = await sellModel.deleteOne({ _id: req.params.id, uid: req.user._id });

    if (config.deletedCount === 0) {
        return res.status(204).json();
    }

    res.status(200).json({
        status: 'success',
        message: 'Product delete successfully'
    });
});

module.exports.addCustomProduct = catchAsync(async (req, res, next) => {
    const { product } = req.body;
    product.slug = slugify(product.category, { lower: true });

    const newproduct = await customModel.create(product);

    res.status(201).json({
        status: 'success',
        message: 'Product added successfully',
        data: {
            product: newproduct,
        },
    });
});

module.exports.getCustomProducts = catchAsync(async (req, res, next) => {
    const CustomProductList = await customModel.find({ uid: req.user._id }).sort({ create_at: 'desc' });

    res.status(200).json({
        status: 'success',
        data: {
            products: CustomProductList,
        },
    });
});

module.exports.removeCustomProduct = catchAsync(async (req, res, next) => {

    const config = await customModel.deleteOne({ _id: req.params.id, uid: req.user._id });

    if (config.deletedCount === 0) {
        return res.status(204).json();
    }

    res.status(200).json({
        status: 'success',
        message: 'Product delete successfully'
    });
});

module.exports.addDonateProduct = catchAsync(async (req, res, next) => {
    const { product } = req.body;
    product.slug = slugify(product.category, { lower: true });

    const newproduct = await donateModel.create(product);

    res.status(201).json({
        status: 'success',
        message: 'Product added successfully',
        data: {
            product: newproduct,
        },
    });
});

module.exports.getDonateProducts = catchAsync(async (req, res, next) => {
    const DonateProductList = await donateModel.find().sort({ create_at: 'desc' });

    res.status(200).json({
        status: 'success',
        data: {
            products: DonateProductList,
        },
    });
});

module.exports.removeDonateProduct = catchAsync(async (req, res, next) => {

    const config = await customModel.deleteOne({ _id: req.params.id, uid: req.user._id });

    if (config.deletedCount === 0) {
        return res.status(204).json();
    }

    res.status(200).json({
        status: 'success',
        message: 'Product delete successfully'
    });
});

module.exports.addPayment = catchAsync(async (req, res, next) => {
    const { paymentData } = req.body;

    if (paymentData.paymentDelivery === 0 && paymentData.address) {
        delete paymentData.address;
    } else if (paymentData.paymentDelivery === 1 && paymentData.facility) {
        delete paymentData.facility;
    }

    const payment = await orderModel.create(paymentData);

    if (paymentData.service.toLowerCase() === 'sell') {
        await sellModel.deleteMany();
    } else if (paymentData.service.toLowerCase() === 'custom') {
        await customModel.deleteMany();
    } else if (paymentData.service.toLowerCase() === 'donate') {
        await donateModel.deleteMany();
    }

    socketIO.onService(payment);

    res.status(200).json({
        status: 'success',
        message: 'Payment successfully',
        data: {
            order: payment,
        },
    });
});

module.exports.getPayments = catchAsync(async (req, res, next) => {
    const filter = req?.user?._id ? { uid: req.user._id } : {}
    const features = new APIFeatures(orderModel.find(), req.query).filter(filter).sort().limitFields();

    const payments = await features.query;

    res.status(200).json({
        status: 'success',
        data: {
            orders: payments,
        },
    });
});

module.exports.getPaymentById = catchAsync(async (req, res, next) => {
    const filter = req.params.id ? {code: req.params.id} : {};
    
    let payment = await orderModel.findOne(filter).sort({ create_at: 'desc' });
    const user = await User.findById(payment.uid);
    payment = JSON.parse(JSON.stringify(payment));
    payment.user = user;
    
    res.status(200).json({
        status: 'success',
        data: {
            order: payment,
        },
    });
});

exports.updateStatus = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const status = req.body.status;

    const order = await orderModel.findOneAndUpdate({ code: id }, { status }, {
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