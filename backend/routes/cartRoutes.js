const { Router } = require('express');
const express = require('express');

const router = express.Router();

// List all
router.route('/').get();

// Cart detail
router.route('/:id').get();

// Add cart
router.route('/').post();

// Delete cart
router.route('/').delete();

module.exports = router;