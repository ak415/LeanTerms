const express = require('express');
const expressValidator = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user');
const Session = require('../models/session');

const signup = (req, res, next) => {
  const allErrors = [];
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const session_token = req.sessionID;
  if (password.length < 6) {
    allErrors.push('Password must be at least 6 characters long');
  }
  bcrypt.hash(password, saltRounds, (err, hash) => {
    const user = new User({
      username,
      email,
      password: hash,
      session_token
    });
    user.validate((err2, ok) => {
      if (err2) {
        if (err2.errors['email']) {
          allErrors.push(err2.errors['email'].message);
        }
        if (err2.errors['username']) {
          allErrors.push(err2.errors['username'].message);
        }
        res.status(422).send(allErrors);
      } else {
        user.save().then(
          savedUser => {
            req.login(user, error => {
              return res.send({
                id: savedUser.id,
                email: savedUser.email,
                username: savedUser.username,
                session_token: savedUser.session_token
              });
            });
          },
          error => {
            res.status(404).send(error.errmsg);
          }
        );
      }
    });
  });
};

const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(422).json(err);
    if (!user) return res.status(422).send(['Invalid login credentials']);
    req.login(user, error => {
      if (error) {
        console.log(error);
        return next(error);
      }
      User.findById(user.id, (anErr, fetchedUser) => {
        if (anErr) {
          res.send('Oops. Something went wrong.');
        } else {
          fetchedUser.session_token = req.sessionID;
          fetchedUser.save().then(savedUser => {
            return res.send({
              id: savedUser.id,
              username: savedUser.username,
              email: savedUser.email
            });
          });
        }
      });
    });
  })(req, res, next);
};

const logout = (req, res, next) => {
  Session.findById(req.sessionID, function(err, dbSession) {
    if (err) return res.status(422).json(err);
    dbSession.remove();
    res.clearCookie('connect.sid', { path: '/' });
    return res.status(200).json('Successfully logged out!');
  });
};

const currentUser = (req, res, next) => {
  User.findOne({ session_token: req.sessionID }, (err, foundUser) => {
    if (err) return res.send(err.errmsg);
    if (!foundUser) return res.send({});
    return res.send({
      id: foundUser.id,
      username: foundUser.username,
      email: foundUser.email
    });
  });
};

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(404).json('Please login first');
  }
};

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  User.findById(user.id, function(err, aUser) {
    done(err, aUser);
  });
});

module.exports = {
  signup,
  login,
  logout,
  currentUser
};
