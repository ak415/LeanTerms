const express = require('express');
const router = express.Router();
var expressValidator = require('express-validator');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var passport = require('passport');
const User = require('../models/user');

///testing
router.get('/api/signup', function(req, res, next) {
  res.send({ areej: 2 });
});
/// testing end

/// Signup route
router.post('/api/signup', (req, res, next) => {
  User.create(req.body).then(
    savedUser => {
      console.log('saved!');
      res.send(savedUser);
    },
    err => console.log(err)
  );
});

/// Login route
router.post('/api/login'),
  (req, res, next) => {
    // console.log(req);
  };

module.exports = router;
