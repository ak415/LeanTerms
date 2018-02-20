const express = require('express');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const User = require('./models/user');
const MongoDB = require('mongodb');
const $ = require('jquery');

//Authentication Packages
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const MongoStore = require('connect-mongo')(session);
const authRoutes = require('./routes/authRoutes');

///connect to MongoDB
mongoose.connect('mongodb://localhost/leanterms');

const app = express();

// require('dotenv').config();

// BodyParser middleware setup- this allows us to use req.body to get params from post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use(cookieParser());

// Express Session middleware
app.use(
  session({
    secret: 'jhsdlfhsdkjfh2345345kjh',
    saveUninitialized: false,
    resave: false,
    ttl: 14 * 24 * 60 * 60,
    unset: 'destroy',
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

///passport
app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(422).json(err.message);
});

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err);

      if (!user) {
        return done(null, false);
      } else {
        // check if password matches hashed password
        const passwordDigest = user.password.toString();
        bcrypt.compare(password, passwordDigest, (error, response) => {
          if (response === true) {
            return done(null, {
              id: user.id,
              username: user.username,
              email: user.email
            });
          } else {
            return done(null, false);
          }
        });
      }
    });
  })
);

// choosing port to listen to based on environment
const PORT = process.env.PORT || 5000;

app.listen(PORT);
