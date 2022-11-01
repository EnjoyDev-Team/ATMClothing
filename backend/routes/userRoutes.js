const { Router } = require('express');
const express = require('express');

const router = express.Router();

// Update profile
router.route('/update').post()

// Update password
router.route('/password').post()

module.exports = router; 