const { Router } = require('express');
const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware')
const orderController = require('../controllers/orderController')

const router = express.Router();

// List all
router.get('/', 
  authMiddleware.protect,
  orderController.getAllOrders);

// Filter
router.route('/filter/:params').get();

// Order detail
router.route('/:id').get();

// Create cart
router.route('/').post();

// Cancel cart
router.route('/').patch();

module.exports = router;