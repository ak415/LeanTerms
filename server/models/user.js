const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String
    // required: [true, 'Name field required']
  },
  email: {
    type: String
    // required: [true, 'Email required']
  },
  password_digest: {
    type: String
    // required: [true, 'Password required']
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
