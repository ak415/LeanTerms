const express = require('express');
const expressValidator = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user');
const Session = require('../models/session');

const signup = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const session_token = req.sessionID;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    //insert into database
    const user = new User({
      username,
      email,
      password: hash,
      session_token
    });
    user
      .save()
      .then(savedUser => {
        req.login(user, error => {
          return res.send({
            id: savedUser.id,
            email: savedUser.email,
            username: savedUser.username,
            session_token: savedUser.session_token
          });
        });
      })
      .catch(next);
  });
};

const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(422).json(err);
    if (!user) return res.status(422).json('Invalid login credentials');
    req.login(user, error => {
      if (error) {
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
    if (err) throw err;
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
