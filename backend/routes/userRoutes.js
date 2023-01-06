const { Router } = require('express');
const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware')
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

// Get all
router.route('/')
.get(userController.filter)
.post(userController.createUser)

router.use(authMiddleware.protect)

// Update profile   
router.patch('/update', authController.updateProfile);

// Update avatar
router.patch('/avatar' , authController.updateAvatar)

// Update password
router.patch('/password', authController.updatePassword)

router.route('/:id')
.get(userController.getById)
.patch(userController.updateUser)
.delete(userController.deleteUser)

module.exports = router; 