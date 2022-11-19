const express = require('express');
const productController = require('../controllers/productsController');

const router = express.Router();

// List all
router.route('/').get(productController.filter);

// Top products
router.route('/san-pham-noi-bat')
.get(productController.aliasTopProducts, productController.filter);

// Free products
router.route('/goc-0d')
.get(productController.aliasFreeProducts, productController.filter);

// Filter items
router.route('/filters').get(productController.getFilterItems);

// Product details
router.route('/:id').get(productController.getById);

module.exports = router;