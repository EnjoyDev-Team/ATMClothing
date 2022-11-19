const express = require('express');
const productController = require('../controllers/productsController');

const router = express.Router();

// List all
router.route('/').get(productController.filter);

// Product detail

router.route('/san-pham-noi-bat')
.get(productController.aliasTopProducts, productController.filter);

router.route('/goc-0d')
.get(productController.aliasFreeProducts, productController.filter);

// Filter items
router.route('/filters').get();

router.route('/:id').get(productController.getById);

module.exports = router;