const express = require('express');
const incomeController = require('../controllers/incomeController');

const router = express.Router();

// List all
router.route('/').get(incomeController.analyst);

module.exports = router;