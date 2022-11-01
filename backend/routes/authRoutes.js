const { Router } = require('express');
const express = require('express');

const router = express.Router();

// REGISTER
// Verify User
router.route('/register').post()

// Otp
router.route('/register/verify').post()

// Register
router.route('/register/password').post()


// FORGOT PASSWORD
// Verify User
router.route('/forgot').post()

// Otp
router.route('/forgot/verify').post()

// Reset password
router.route('/forgot/password').post()


// LOGIN
router.route('/login').post()

// REFRESH TOKEN
router.route('/refresh').get()

module.exports = router;