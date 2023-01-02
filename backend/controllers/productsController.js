const catchAsync = require('../utils/catchAsync');
const productModel = require('../models/productModel');
const APIFeatures = require('../utils/apiFeature');
const imageEncode = require('../utils/imageEncode');
const AppError = require('../utils/appError');
const slugify = require('slugify');
const { categoryModel, materialModel, facilityModel } = require('../models/productItemModel');
const spiltBase64 = require('../utils/spiltBase64');
const fs = require('fs');

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

    const exitsProduct = await productModel.find({name: data.name});
    if (exitsProduct.length > 1){
        return next(new AppError('This product has exists !', 400));
    }
    else if (exitsProduct.length === 1 && exitsProduct[0]._id.toString() !== productID) {
        return next(new AppError('This product has exists !', 400));
    }

    const product = await productModel.findOne({_id: productID});
    
    if (!product) {
        return next(new AppError('There are no product with this id!', 400));
    }

    if (data.img && data.img?.length > 0) {
        const image = data.img;
    
        const { ext, base64Data } = spiltBase64(image);

        const filename = slugify(data.name, { lower: true, locale: 'vi', remove: /[*+~.()'"!:@]/g });

        fs.writeFileSync(`assets/products/${filename}.${ext}`, base64Data, 'base64', function(err) {
            console.log(err);
        });
        
        data.img = `assets/products/${filename}.${ext}`;
    }

    if (data.other_img && data.other_img?.length > 0) {
        const other_filename = [];

        data.other_img = data.other_img && data.other_img.length > 0 && data.other_img.map((img, index) => {
            const { ext, base64Data } = spiltBase64(img);

            let filename = slugify(data.name, { lower: true, locale: 'vi', remove: /[*+~.()'"!:@]/g });
            filename = `${filename}-other--${index}}`;

            other_filename.push(filename);

            fs.writeFileSync(`assets/products/${filename}.${ext}`, base64Data, 'base64', function(err) {
                console.log(err);
            });
            
            return `assets/products/${filename}.${ext}`;
        });
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
    
    const { ext, base64Data } = spiltBase64(image);

    const filename = slugify(product.name, { lower: true, locale: 'vi', remove: /[*+~.()'"!:@]/g });

    fs.writeFileSync(`assets/products/${filename}.${ext}`, base64Data, 'base64', function(err) {
        console.log(err);
    });
    
    product.img = `assets/products/${filename}.${ext}`;

    const other_filename = [];

    product.other_img = product.other_img && product.other_img.length > 0 && product.other_img.map((img, index) => {
        const { ext, base64Data } = spiltBase64(img);

        let filename = slugify(product.name, { lower: true, locale: 'vi', remove: /[*+~.()'"!:@]/g });
        filename = `${filename}-other--${index}}`;

        other_filename.push(filename);

        fs.writeFileSync(`assets/products/${filename}.${ext}`, base64Data, 'base64', function(err) {
            console.log(err);
        });
        
        return `assets/products/${filename}.${ext}`;
    });
    
    const newproduct = await productModel.create(product);

    res.status(201).json({
        status: 'success',
        message: 'Product added successfully',
        data: {
            product: {
                ...newproduct,
                other_filename: other_filename,
                filename: filename
            },
        },
    });
});