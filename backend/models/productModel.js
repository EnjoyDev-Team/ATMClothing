const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    category: {
        type: String,
        required: [true, "Category can not is empty!"],
    },
    slug: {
        type: String,
        required: [true, "Slug can not is empty!"],
    },
    name: {
        type: String,
        required: [true, "Name of product can not is empty!"],
    },
    price: {
        type: String,
        required: [true, "Price can not is empty!"],
    },
    sale: {
        type: String,
        required: [true, "Sale can not is empty!"],
    },
    size: {
        type: String,
        required: [true, "Size can not is empty!"],
    },
    note_size: String,
    color: {
        type: String,
        required: [true, "Color can not is empty!"],
    },
    amount: {
        type: Number,
        required: [true, "Amount can not is empty!"],
    },
    material: String,
    facility: [
        {
            code: {
                type: String,
                required: [true, "Code of facility can not is empty!"],
            },
            name: {
                type: String,
                required: [true, "Name of facility can not is empty!"],
            },
            address: {
                type: String,
                required: [true, "Address of facility can not is empty!"],
            },
            _id: false,
        },
    ],
    img: {
        type: String,
        required: [true, "Image of product can not is empty!"],
    },
    other_img: [String],
    status: {
        type: String,
        required: [true, "Status of product can not is empty!"],
    },
    description: String,
    create_at: {
        type: Date,
        default: new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }),
        select: false,
    },
});

module.exports = mongoose.model('products', productModel);
