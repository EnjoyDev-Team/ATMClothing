const catchAsync = require('../utils/catchAsync');
const productModel = require('../models/productModel');
const APIFeatures = require('../utils/apiFeature');
const imageEncode = require('../utils/imageEncode');
const { categoryModel, materialModel, facilityModel } = require('../models/productItemModel');

module.exports.aliasTopProducts = (req, res, next) => {
    req.query.limit = '6';
    req.query.sort = '-create_at,price';
    next();
};

module.exports.aliasFreeProducts = (req, res, next) => {
    req.query.limit = '6';
    req.query.sale = '0';
    next();
};

module.exports.filter = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(productModel.find(), req.query)
                        .filter()
                        .sort()
                        .limitFields()
                        .paginate();

    const products = await features.query;
    const newproducts = imageEncode(products);

    res.status(200).json({
        status: 'success',
        total: products.length,
        data: newproducts
    });
});

module.exports.getById = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(productModel.findById(req.params.id))
                        .limitFields();

    const product = await features.query;
    const newproducts = imageEncode([product]);

    res.status(200).json({
        status: 'success',
        data: newproducts
    });
});

module.exports.getFilterItems = catchAsync(async (req, res, next) => {
    const categories = await categoryModel.find().select('-_id -__v');
    const materials = await materialModel.find().select('-_id -__v');
    const facilities = await facilityModel.find().select('-_id -__v');

    const product_items = {
        categories,
        materials,
        facilities,
    };

    res.status(200).json({
        status: 'success',
        data: product_items
    });
});