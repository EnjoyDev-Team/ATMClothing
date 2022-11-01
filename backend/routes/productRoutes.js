const { Router } = require('express');
const express = require('express');

const router = express.Router();

// List all
router.route('/').get();

// Filter
router.route('/filters/:params').get();

// Product detail
router.route('/:id').get();

// Filter items
router.route('/filters').get();

module.exports = router;