const { Router } = require('express');
const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

// Get all
router.route('/')
.get(userController.filter)
.post(userController.createUser)

router.route('/:id')
.get(userController.getById)
.patch(userController.updateUser)
.delete(userController.deleteUser)

// Update profile
router.route('/update').post()

// Update avatar
router.patch('/avatar')

// Update password
router.post('/password', authController.updatePassword)

module.exports = router; 