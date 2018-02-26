const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
  username: {
    type: String,
    minlength: [4, 'Username must be at least 4 characters long'],
    required: [true, 'Username required'],
    unique: true
  },
  email: {
    type: String,
    minlength: [4, 'Email must be at least 4 characters long'],
    required: [true, 'Email required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password required']
  },
  session_token: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  streetAddress: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  }
});

UserSchema.plugin(uniqueValidator, {
  message: 'This {PATH} is not available'
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
