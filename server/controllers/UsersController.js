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
  bcrypt.hash(password, saltRounds, (err, hash) => {
    //insert into database
    const user = new User({ username: username, email: email, password: hash });
    user
      .save()
      .then(savedUser => {
        req.login(user, error => {
          return res.send({
            id: savedUser.id,
            username: savedUser.username,
            email: savedUser.email
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
      return res.send(user);
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
  logout
};
