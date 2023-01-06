const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware')
const serviceController = require('../controllers/servicesController');

const router = express.Router();

// router.use(authMiddleware.protect);

router.route('/sell')
.get(serviceController.getSellProducts)
.post(serviceController.addSellProduct);

router.route('/sell/:id')
.delete(serviceController.removeSellProduct);

router.route('/custom')
.get(serviceController.getCustomProducts)
.post(serviceController.addCustomProduct);

router.route('/custom/:id')
.delete(serviceController.removeCustomProduct);

router.route('/donate')
.get(serviceController.getDonateProducts)
.post(serviceController.addDonateProduct);

router.route('/donate/:id')
.delete(serviceController.removeCustomProduct);

router.route('/')
.get(serviceController.getPayments)
.post(serviceController.addPayment);

// Cart detail
router.route('/:id')
.get(serviceController.getPaymentById);

// Update status
router.patch('/status/:id', serviceController.updateStatus);

// Add cart
router.route('/').post();

// Delete cart
router.route('/').delete();

module.exports = router;