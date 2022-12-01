const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productModel = require('../models/productModel');
const { categoryModel, facilityModel, materialModel } = require('../models/productItemModel');
const products = require('./data/products');
const { categories, facilities, materials } = require('./data/productItems');
const { sellModel, customModel, donateModel, orderModel } = require('../models/serviceModel');

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

            categoryModel.create(categories)
            .then(() => console.log('import categories successfully'))
            .catch(err => console.log(err));

            facilityModel.create(facilities)
            .then(() => console.log('import facilities successfully'))
            .catch(err => console.log(err));
            
            materialModel.create(materials)
            .then(() => console.log('import materials successfully'))
            .catch(err => console.log(err));
        },
        '--eject': () => {

            categoryModel.deleteMany()
            .then(() => console.log('eject categories successfully'))
            .catch(err => console.log(err));

            facilityModel.deleteMany()
            .then(() => console.log('eject facilities successfully'))
            .catch(err => console.log(err));
            
            materialModel.deleteMany()
            .then(() => console.log('eject materials successfully'))
            .catch(err => console.log(err));
        }
    },
    'services.sell': {
        '--import': () => {
        },
        '--eject': () => {

            sellModel.deleteMany()
            .then(() => console.log('services: eject sell products successfully'))
            .catch(err => console.log(err));
        }
    },
    'services.custom': {
        '--import': () => {
        },
        '--eject': () => {

            customModel.deleteMany()
            .then(() => console.log('services: eject custom products successfully'))
            .catch(err => console.log(err));

        }
    },
    'services.donate': {
        '--import': () => {
        },
        '--eject': () => {

            donateModel.deleteMany()
            .then(() => console.log('services: eject custom products successfully'))
            .catch(err => console.log(err));

        }
    },
    'services.orders': {
        '--import': () => {
        },
        '--eject': () => {

            orderModel.deleteMany()
            .then(() => console.log('services: eject orders products successfully'))
            .catch(err => console.log(err));

        }
    }
};

const type = process.argv[2];
const action = process.argv[3];

if (type && action)
    scripts[type][action]();
