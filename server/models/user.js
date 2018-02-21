const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Name field required'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password required']
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

const User = mongoose.model('user', UserSchema);

module.exports = User;
