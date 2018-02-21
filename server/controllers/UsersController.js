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

const login = (req, res, next) => {};

module.exports = {
  signup,
  login
};
