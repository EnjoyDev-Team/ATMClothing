const mongoose = require('mongoose');
const slugify = require('slugify');

const productModel = new mongoose.Schema({
    category: {
        type: String,
        trim: true,
        required: [true, "Category can not is empty!"],
    },
    slug: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "Slug can not is empty!"],
    },
    name: {
        type: String,
        trim: true,
        required: [true, "Name of product can not is empty!"],
    },
    price: {
        type: String,
        trim: true,
        required: [true, "Price can not is empty!"],
    },
    sale: {
        type: String,
        trim: true,
        required: [true, "Sale can not is empty!"],
    },
    size: {
        type: String,
        uppercase: true,
        trim: true,
        required: [true, "Size can not is empty!"],
    },
    note_size: {
        type: String,
        trim: true,
    },
    color: {
        type: String,
        trim: true,
        required: [true, "Color can not is empty!"],
    },
    amount: {
        type: Number,
        min: [0, "Minimum amount is 0"],
        required: [true, "Amount can not is empty!"],
    },
    material: {
        type: String,
        trim: true,
        lowercase: true,
    },
    facility: [
        {
            code: {
                type: String,
                trim: true,
                uppercase: true,
                required: [true, "Code of facility can not is empty!"],
            },
            name: {
                type: String,
                trim: true,
                required: [true, "Name of facility can not is empty!"],
            },
            address: {
                type: String,
                trim: true,
                required: [true, "Address of facility can not is empty!"],
            },
            _id: false,
        },
    ],
    img: {
        type: String,
        trim: true,
        required: [true, "Image of product can not is empty!"],
    },
    other_img: [String, { 
        trim: true,
    }],
    status: {
        type: String,
        trim: true,
        required: [true, "Status of product can not is empty!"],
    },
    description: {
        type: String,
        trim: true,
    },
    create_at: {
        type: Date,
        default: new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }),
        select: false,
    },
});

productModel.pre('save', (next) => {
    if (this.isNew) {
        this.create_at = new Date(new Date().toLocaleString({ locale: 'en_US', timeZone: 'Asia/Ho_Chi_Minh' })).now() - 1000;
    }

    next();
});

module.exports = mongoose.model('products', productModel);
