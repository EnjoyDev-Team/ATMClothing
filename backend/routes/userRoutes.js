const { Router } = require('express');
const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware')
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authMiddleware.protect)

// Update profile
router.patch('/update', authController.updateProfile);

// Update avatar
router.patch('/avatar' , authController.updateAvatar)

// Update password
router.patch('/password', authController.updatePassword)

module.exports = router; 