const { Router } = require('express');
const express = require('express');

const router = express.Router();

// List all
router.route('/').get()

// Create address
router.route('/').post();

module.exports = router;