const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    sale: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    note_size: String,
    color: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    material: String,
    facility: [
        {
            code: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
            _id: false,
        },
    ],
    img: {
        type: String,
        required: true,
    },
    other_img: [String],
    status: {
        type: String,
        required: true,
    },
    description: String,
    create_at: {
        type: Date,
        default: new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }),
        select: false,
    },
});

module.exports = mongoose.model('products', productModel);
