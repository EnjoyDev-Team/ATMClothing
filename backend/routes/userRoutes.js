const { Router } = require('express');
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Update profile
router.route('/update').post()

// Update avatar
router.patch('/avatar')

// Update password
router.post('/password', authController.updatePassword)

module.exports = router; 