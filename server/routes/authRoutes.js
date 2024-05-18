
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login/user', authController.userLogin); 
router.post('/login/admin', authController.adminLogin); 

module.exports = router;
