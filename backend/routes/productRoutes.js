const express = require('express');
const productController = require('../controllers/productsController');

const router = express.Router();

// List all
router.route('/').get(productController.filter);

// Product detail
router.route('/:id').get(productController.getById);

// Filter items
router.route('/filters').get();

module.exports = router;