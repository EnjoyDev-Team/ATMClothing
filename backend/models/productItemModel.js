const mongoose = require('mongoose');

const productItemModel = new mongoose.Schema({
    categories: [
        {
            name: {
                type: String,
                required: true,
            },
            slug: {
                type: String,
                required: true,
            },
            _id: false,
        },
    ],
    facilities: [
        {
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
            _id: false,
        },
    ],
    materials: [String],
});

module.exports = mongoose.model('product-items', productItemModel);
