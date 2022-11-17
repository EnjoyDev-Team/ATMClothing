const mongoose = require('mongoose'); // Erase if already required

const productModel = new mongoose.Schema({
    category: { type: String, required: true },
    slug: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    sale: String,
    size: { type: String, required: true },
    noteSize: String,
    color: { type: String, required: true },
    amount: { type: Number, required: true },
    material: String,
    facility: [
        {
            name: { type: String, required: true },
            address: { type: String, required: true },
        },
    ],
    img: { type: String, required: true },
    other_img: [String],
    status: { type: String, required: true },
    description: String,
});

module.exports = mongoose.model('products', productModel);
