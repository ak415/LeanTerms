const express = require('express');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

//Authentication Packages
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

mongoose.connect(keys.mongoURI);

const app = express();

// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cookieParser.json());

app.user(passport.initialize());
app.use(passport.session());

//this part allows us to check if user is logged in
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

///catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

////

const PORT = process.env.PORT || 5000;

app.listen(PORT);
