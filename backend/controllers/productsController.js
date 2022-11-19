const catchAsync = require('../utils/catchAsync');
const productModel = require('../models/productModel');
const APIFeatures = require('../utils/apiFeature');
const imageEncode = require('../utils/imageEncode');

module.export.filter = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(productModel.find(), req.query)
                        .filter()
                        .sort()
                        .limitFields()
                        .paginate();

    const products = await features.query;
    const newproducts = imageEncode(products);

    res.status(200).json({
        status: 'success',
        results: newproducts.length,
        data: newproducts,
    });

    next();
});

module.export.getById = catchAsync(async () => {
    const features = new APIFeatures(productModel.findById(req.params.id))
                        .limitFields();

    const product = await features.query;

    res.status(200).json({
        status: 'success',
        data: product,
    });
});
