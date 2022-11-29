const mongoose = require('mongoose'); 

const sellSchema = new mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        required: [true, 'Please logged in to continue'],
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'Name of product can not be empty!'],
    },
    category: { 
        type: String, 
        trim: true,
        required: [true, 'Category of product can not be empty!'],
    },
    slug: {
        type: String,
        trim: true,
        required: [true, 'Slug of product can not be empty!'],
    },
    price: {
        type: String,
        trim: true,
        required: [true, 'Price of product can not be empty!'],
    },
    amount: {
        type: Number,
        trim: true,
        required: [true, 'Amount of product can not be empty!'],
    },
    status: {
        type: String,
        trim: true,
        required: [true, 'Status of product can not be empty!'],
    },
    pre_img: {
        type: String,
        trim: true,
    },
    post_img: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    material: {
        type: String,
        trim: true,
        lowercase: true,
    },
    size: {
        type: String,
        trim: true,
        uppercase: true,
    },
    create_at: {
        type: Date,
        default: Date.now,
    },
});

sellSchema.pre('save', (next) => {
    this.create_at = Date.now() - 1000;
    next();
});

module.exports.sellModel = mongoose.model('sells', sellSchema);

const customSchema = new mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        required: [true, 'Please logged in to continue'],
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'Name of product can not be empty!'],
    },
    category: { 
        type: String, 
        trim: true,
        required: [true, 'Category of product can not be empty!'],
    },
    slug: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Slug of product can not be empty!'],
    },
    price: {
        type: String,
        trim: true,
    },
    amount: {
        type: Number,
        amount: [1, 'Minimum of amount is 1'],
        required: [true, 'Amount of product can not be empty!'],
    },
    status: {
        type: String,
        trim: true,
        required: [true, 'Status of product can not be empty!'],
    },
    idea_description: {
        type: String,
        trim: true,
    },
    idea_img: {
        type: String,
        trim: true,
    },
    idea_link: {
        type: String,
        trim: true,
    },
    pre_img: {
        type: String,
        trim: true,
    },
    post_img: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    material: {
        type: String,
        trim: true,
        lowercase: true,
    },
    size: {
        type: String,
        trim: true,
        uppercase: true,
    },
    create_at: {
        type: Date,
        default: Date.now,
    },
});

customSchema.pre('save', (next) => {
    if (this.isNew) {
        this.create_at = Date.now() - 1000;
    }
    next();
});

module.exports.customModel = mongoose.model('customs', customSchema);

const orderSchema = mongoose.Schema({
    products: [{
        uid: {
            type: mongoose.Schema.Types.ObjectId,
            // required: [true, 'Please logged in to continue'],
        },
        name: {
            type: String,
            trim: true,
            required: [true, 'Name of product can not be empty!'],
        },
        category: { 
            type: String, 
            trim: true,
            required: [true, 'Category of product can not be empty!'],
        },
        slug: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'Slug of product can not be empty!'],
        },
        amount: {
            type: Number,
            amount: [1, 'Minimum of amount is 1'],
            required: [true, 'Amount of product can not be empty!'],
        },
        status: {
            type: String,
            trim: true,
            required: [true, 'Status of product can not be empty!'],
        },
        idea_description: {
            type: String,
            trim: true,
        },
        idea_img: {
            type: String,
            trim: true,
        },
        idea_link: {
            type: String,
            trim: true,
        },
        pre_img: {
            type: String,
            trim: true,
        },
        post_img: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        material: {
            type: String,
            trim: true,
            lowercase: true,
        },
        size: {
            type: String,
            trim: true,
            uppercase: true,
        },
        create_at: {
            type: Date,
            default: Date.now,
        },
    }],
    facility: {
        code: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        }
    },
    address: {
        code: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        }
    },
    totalPrice: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
    },
    service: {
        type: String,
        trim: true,
    },
    paymentMethod: {
        type: Number,
        require: [true, "The payment method cannot be empty!"]
    },
    paymentDelivery: {
        type: Number,
        require: [true, "The payment delivery cannot be empty!"]
    },
    code: {
        type: String, 
        trim: true,
        require: [true, "The payment id cannot be empty!"],
    },
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        required: [true, 'Please logged in to continue'],
    },
    create_at: {
        type: Date,
        default: Date.now,
    },
}, {
    strict: true,
    strictQuery: false
});

module.exports.orderModel = mongoose.model('service-orders', orderSchema);