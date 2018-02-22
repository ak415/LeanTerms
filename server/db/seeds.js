const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/user');
const Contract = require('../models/contract');
const Type = require('../models/type');
const mongoose = require('mongoose');
const UsersController = require('../controllers/UsersController');

const users = [
  { username: 'demo', email: 'demo', password: 'password' }
  // { username: 'areej', email: 'areej@gmail.com', password: 'password' },
  // { username: 'akram', email: 'akram@gmail.com', password: 'password' },
  // { username: 'ali', email: 'ali@gmail.com', password: 'password' },
  // { username: 'markov', email: 'markov@gmail.com', password: 'password' },
  // { username: 'sennacy', email: 'sennacy@gmail.com', password: 'password' }
];

for (let i = 0; i < users.length; i++) {
  let username = users[i].username;
  let email = users[i].email;
  let password = users[i].password;
  let foundUser = User.findOne({ username: username, email: email });
  if (!foundUser) {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) console.log(err);
      let user = new User({ username: username, email: email, password: hash });
      user.save();
    });
  }
}
