const catchAsync = require('../utils/catchAsync');
const productModel = require('../models/productModel');
const APIFeatures = require('../utils/apiFeature');
const imageEncode = require('../utils/imageEncode');
const AppError = require('../utils/appError');
const slugify = require('slugify');
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
    const features = new APIFeatures(productModel.findById(req.params.id), req.query)
                        .limitFields();

    const product = await features.query;
    
    if (!product){
        return res.status(404).json({
            status: 'error',
            message: 'Product not found'
        });
    }

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

module.exports.getTotal = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(productModel.countDocuments(), req.query)
                    .getTotal()
                    .limitFields();

    const totals = await features.query;

    res.status(200).json({
        status: 'success',
        data: {
            total: totals
        }
    });
});

module.exports.updateProduct = catchAsync(async (req, res, next) => { 
    const productID = req.params.id;
    const data = req?.body;

    const product = await productModel.findOne({_id: productID});
    
    if (!product) {
        return next(new AppError('There are no product with this id!', 400));
    }

    const newProduct = await productModel.findByIdAndUpdate(productID, data, {
        new: true,
        runValidators: true,
    });

    res.status(201).json({
        status: 'success',
        data: newProduct
    });
});

module.exports.deleteProduct = catchAsync(async (req, res, next) => {
    const product = await productModel.findByIdAndDelete(req.params.id);
  
    if (!product) {
        return next(new AppError('No product found with that ID', 404))
    }
  
    res.status(204).json({
        status: 'success'
    });
});

module.exports.addProduct = catchAsync(async (req, res, next) => {
    const { product } = req.body;
    product.slug = slugify(product.category, { lower: true });
    
    const image = product.img;
    const ext = image.split(';')[0].split('/')[1];
    const base64Data = image.split(';')[1].split('/')[1];
    
    require("fs").writeFileSync(`assets/products/${slugify(product.name, { lower: true })}.${ext}`, base64Data, 'base64', function(err) {
        console.log(err);
    });
    
    product.img = `assets/products/${slugify(product.name, { lower: true })}.${ext}`;
    
    const newproduct = await productModel.create(product);

    res.status(201).json({
        status: 'success',
        message: 'Product added successfully',
        data: {
            product: newproduct,
        },
    });
});