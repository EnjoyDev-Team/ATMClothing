const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../models/userModel');
const APIFeatures = require('../utils/apiFeature');

exports.getAllAddress = catchAsync(async (req, res, next) => {
    const filter = { _id: req.params.id };
    
    const features = new APIFeatures(User.find(filter)).filter().sort().limitFields().paginate();
    const doc = await features.query;
    if (!doc) {
      return next(new AppError('There is not user with this id', 404));
    }
    const address = doc[0].address;

    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: address
    });
});

// exports.createOrder = catchAsync(async (req, res, next) => {
//     const data = req.body;

//     const user = await User.findOne({ _id: data.idUser }).exec();
//     if (!user) {
//         return next(new AppError('There is not user with this id', 404));
//     }

//     data.products.map(async (el) => {
//         const product = await products.findOne({ _id: el.idProduct }).exec();
//         if (el.amount <= 0 || product.amount < el.amount) {
//             return next(new AppError('Number of invalid products', 404));
//         }
//     });

//     const doc = await Order.create(data);

//     res.status(201).json({
//         status: 'success',
//         data: {
//             data: doc,
//         },
//     });
// });
