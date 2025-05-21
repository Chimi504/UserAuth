const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../Middleware/authMiddleware');
const userController = require('../controllers/userController');


router.get('/dashboard', isAuthenticated, userController.getDashboard);


router.get('/foods',isAuthenticated, userController.getAllFoods);


module.exports = router;


