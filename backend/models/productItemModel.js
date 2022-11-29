const mongoose = require('mongoose');

const categoryModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
});

module.exports.categoryModel = mongoose.model('categories', categoryModel);

const facilityModel = new mongoose.Schema({
    code: {
        type: String,
        required: [true, 'Code of facility can not is empty!'],
    },
    name: {
        type: String,
        required: [true, 'Name of facility can not is empty!'],
    },
    address: {
        type: String,
        required: [true, 'Address of facility can not is empty!'],
    },
});

module.exports.facilityModel = mongoose.model('facilities', facilityModel);

const materialModel = new mongoose.Schema({
    name: String
});

module.exports.materialModel = mongoose.model('materials', materialModel);
