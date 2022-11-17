const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productModel = require('../models/productModel');
const products = require('./data/products/products');

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
    }
};

const type = process.argv[2];
const action = process.argv[3];

scripts[type][action]();