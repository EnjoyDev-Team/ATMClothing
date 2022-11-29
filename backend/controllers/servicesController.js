const { sellModel, customModel, orderModel } = require('../models/serviceModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const slugify = require('slugify');

module.exports.getSellProducts = catchAsync(async (req, res, next) => {
    const sellProductList = await sellModel.find().sort({ create_at: 'desc' });

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
    const CustomProductList = await customModel.find().sort({ create_at: 'desc' });

    res.status(200).json({
        status: 'success',
        data: {
            products: CustomProductList,
        },
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

    res.status(200).json({
        status: 'success',
        message: 'Payment successfully',
        data: {
            order: payment,
        },
    });
});

module.exports.getPayments = catchAsync(async (req, res, next) => {
    const payments = await orderModel.find().sort({ create_at: 'desc' });

    res.status(200).json({
        status: 'success',
        data: {
            orders: payments,
        },
    });
});

module.exports.getPaymentById = catchAsync(async (req, res, next) => {
    const filter = req.params.id ? {code: req.params.id} : {};
    
    const payment = await orderModel.find(filter).sort({ create_at: 'desc' });

    res.status(200).json({
        status: 'success',
        data: {
            order: payment,
        },
    });
});
