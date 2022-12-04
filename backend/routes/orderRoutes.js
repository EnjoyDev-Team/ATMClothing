const { Router } = require('express');
const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware')
const orderController = require('../controllers/orderController')

const router = express.Router();

router.use(authMiddleware.protect)

// Get enum list
router.get('/enum', orderController.getEnumList)

// router.use(authMiddleware.protect)

// List all
router.get('/', orderController.filter);

// Order detail
router.get('/:id', orderController.getById);

// Create cart
router.post('/', orderController.createOrder);


module.exports = router;