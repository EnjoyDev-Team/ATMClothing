const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();

// REGISTER
// Verify User
router.post('/register', authMiddleware.tokenPhone);

// Register
router.post('/register/password', authController.signup);


// FORGOT PASSWORD
// Verify User
router.post('/forgot', authMiddleware.getUser);

// Reset password
router.post('/forgot/password', authController.forgotPassword);


// LOGIN
router.post('/login', authController.login);

// LOGOUT
router.get('/logout', authController.logout);

// REFRESH TOKEN
router.get('/refresh', authController.refreshToken);

module.exports = router;