const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productModel = require('../models/productModel');
const productItemModel = require('../models/productItemModel');
const products = require('./data/products');
const product_items = require('./data/productItems');

dotenv.config({ path: 'config.env' });

mongoose.connect(process.env.DATABASE)
.then(() => console.log('connect to database successfully'))
.catch(err => console.log(err));

const scripts = {
    'products': {
        '--import': () => {

            productModel.create(products)
            .then(() => console.log('import products successfully'))
            .catch(err => console.log(err));

        },
        '--eject': () => {

            productModel.deleteMany()
            .then(() => console.log('eject products successfully'))
            .catch(err => console.log(err));

        }
    },
    'product-items': {
        '--import': () => {

            productItemModel.create(product_items)
            .then(() => console.log('import product items successfully'))
            .catch(err => console.log(err));

        },
        '--eject': () => {

            productItemModel.deleteMany()
            .then(() => console.log('eject product items successfully'))
            .catch(err => console.log(err));

        }
    }
};

const type = process.argv[2];
const action = process.argv[3];

if (type && action)
    scripts[type][action]();
