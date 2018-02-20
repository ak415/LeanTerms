const express = require('express');
const router = express.Router();
var expressValidator = require('express-validator');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var passport = require('passport');

///testing
router.get('/api/signup', function(req, res, next) {
  res.send({ areej: 2 });
});

/// Signup route
router.post('/api/signup', (req, res, next) => {
  console.log(req.body);
});

/// Login route
router.post('/api/login'),
  (req, res, next) => {
    console.log(req);
  };

module.exports = router;
