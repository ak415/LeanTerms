const express = require('express');
const router = express.Router();
var expressValidator = require('express-validator');
const User = require('../models/user');
const Contract = require('../models/contract');
const Type = require('../models/type');
const saltRounds = 10;
const bcrypt = require('bcrypt');
const passport = require('passport');
const mongoose = require('mongoose');

const users = [
  { username: 'demo', email: 'demo', password: 'password' },
  { username: 'areej', email: 'areej@gmail.com', password: 'password' },
  { username: 'akram', email: 'akram@gmail.com', password: 'password' },
  { username: 'ali', email: 'ali@gmail.com', password: 'password' },
  { username: 'markov', email: 'markov@gmail.com', password: 'password' },
  { username: 'sennacy', email: 'sennacy@gmail.com', password: 'password' }
];
