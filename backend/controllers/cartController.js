const crypto = require('crypto');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Cart = require('../models/cartModel');
const User = require('../models/userModel');
const products = require('../models/productModel');
const APIFeatures = require('../utils/apiFeature');
const imageEncode = require('../utils/imageEncode');
const fs = require('fs');

const base64_encode = (path, root = '') => {
    const ext = path.substring(path.lastIndexOf('.')).split('.')[1];
    const base64 = fs.readFileSync(`${root}${path}`, 'base64');

    return `data:${ext};base64,${base64}`;
};

module.exports.filter = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Cart.find(), req.query).filter().sort().limitFields().paginate();

    const doc = await features.query;

    doc.map((item) => {
        (item.detail = item.idProduct),
        (item.img = item.idProduct.img),
        (item.idProduct = item.idProduct._id);
    });

    imageEncode(doc);

    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: doc,
    });
});

exports.addToCart = catchAsync(async (req, res, next) => {
    const data = req.body;

    const user = await User.findOne({ _id: data.idUser }).exec();
    if (!user) {
        return next(new AppError('There is not user with this id', 404));
    }

    const product = await products.findOne({ _id: data.idProduct }).exec();
    if (!user) {
        return next(new AppError('There is not procduct with this idProduct', 404));
    }

    if (data.quality <= 0) {
        return next(new AppError('Number of invalid products', 404));
    }

    const result = await Cart.create(data);
    const tmp = await Cart.findById(result._id);

    const doc = {
        _id: tmp._id,
        createAt: tmp.createAt,
        idUser: tmp.idUser,
        idProduct: tmp.idProduct._id,
        quality: tmp.quality,
        size: tmp.size,
        detail: tmp.idProduct,
    };
    doc.img = base64_encode(doc.detail.img)

    res.status(201).json({
        status: 'success',
        data: doc,
    });
});

exports.updateCart = catchAsync(async (req, res, next) => {
    const result = await Cart.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!result) {
        return next(new AppError('No document found with that ID', 404));
    }

    const doc = {
        _id: result._id,
        createAt: result.createAt,
        idUser: result.idUser,
        idProduct: result.idProduct._id,
        quality: result.quality,
        size: result.size,
        detail: result.idProduct,
    };
    doc.img = base64_encode(doc.detail.img)

    res.status(200).json({
        status: 'success',
        data: doc,
    });
});

exports.deleteFromCart = catchAsync(async (req, res, next) => {
    const doc = await Cart.findByIdAndDelete(req.params.id);

    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null,
    });
});
