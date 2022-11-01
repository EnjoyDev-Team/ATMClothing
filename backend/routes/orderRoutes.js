const { Router } = require('express');
const express = require('express');

const router = express.Router();

// List all
router.route('/').get();

// Filter
router.route('/filter/:params').get();

// Order detail
router.route('/:id').get();

// Create cart
router.route('/').post();

// Cancel cart
router.route('/').patch();

module.exports = router;