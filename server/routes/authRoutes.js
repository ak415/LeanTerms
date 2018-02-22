const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
const passport = require('passport');
const mongoose = require('mongoose');
const UsersController = require('../controllers/UsersController');

/// Signup route
router.route('/api/signup').post(UsersController.signup);

router.route('/api/login').post(UsersController.login);

router.route('/api/logout').get(UsersController.logout);

//this part allows us to check if user is logged in
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(404).json('Please login first');
  }
}
///

module.exports = router;
