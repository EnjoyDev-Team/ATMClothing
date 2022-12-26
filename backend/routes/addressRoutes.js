const { Router } = require('express');
const express = require('express');
const addressController = require('../controllers/addressController')

const router = express.Router();

// List all
router.route('/:id').get(addressController.getAllAddress)

// Create address
router.route('/:id').post();

module.exports = router;