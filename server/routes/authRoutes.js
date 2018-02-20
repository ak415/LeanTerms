const express = require('express');
const router = express.Router();
var expressValidator = require('express-validator');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var passport = require('passport');
const User = require('../models/user');

/// Signup route
router.post('/api/user', (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    //insert into database
    const user = new User({ username: username, email: email, password: hash });
    user
      .save()
      .then(savedUser => {
        req.login(user, error => {
          return res.send(savedUser);
        });
      })
      .catch(next);
  });
});

/// Login route
router.post('/api/session', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(422).json(err);

    if (!user) return res.status(404).json('Invalid login credentials');
    req.login(user, error => {
      if (error) {
        return next(error);
      }
      console.log(user);
      return res.send(user);
    });
  })(req, res, next);
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Logout route
router.get('/api/logout', isAuthenticated, (req, res, next) => {
  req.logout();
  req.session.destroy();
});

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
