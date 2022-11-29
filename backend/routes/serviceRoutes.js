const express = require('express');
const serviceController = require('../controllers/servicesController');

const router = express.Router();

router.route('/sell')
.get(serviceController.getSellProducts)
.post(serviceController.addSellProduct);

router.route('/custom')
.get(serviceController.getCustomProducts)
.post(serviceController.addCustomProduct);

router.route('/')
.get(serviceController.getPayments)
.post(serviceController.addPayment);

// Cart detail
router.route('/:id').get(serviceController.getPaymentById);

// Add cart
router.route('/').post();

// Delete cart
router.route('/').delete();

module.exports = router;