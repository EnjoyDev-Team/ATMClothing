const { Router } = require('express');
const express = require('express');
const cartController = require('../controllers/cartController')

const router = express.Router();

// List all
router.get('/', cartController.filter);

// Cart detail
router.patch('/:id', cartController.updateCart);

// Add cart
router.post('/', cartController.addToCart);

// Delete cart
router.delete('/:id', cartController.deleteFromCart);

module.exports = router;