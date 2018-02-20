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

// const index = require('./routes/index');
// const users = require('./routes/users');
const authRoutes = require('./routes/authRoutes');

///connect to MongoDB
mongoose.connect('mongodb://localhost:5000/leanterms');
mongoose.Promise = global.Promise;

const app = express();

// BodyParser middleware setup- this allows us to use req.body to get params from post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser.json());

app.use(authRoutes);

app.use(passport.initialize());
app.use(passport.session());

//this part allows us to check if user is logged in
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

// Express Session middleware
app.use(
  session({
    secret: keys.sessionSecret,
    saveUninitialized: true,
    resave: true
  })
);

// choosing port to listen to based on environment
const PORT = process.env.PORT || 5000;

app.listen(PORT);
