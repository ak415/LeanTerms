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
  sessionToken: {
    type: String
  }
});

function findUserById(userId) {
  User.findById(userId, function(err, user) {
    if (err) throw err;
    user.sessionToken = 'sdhfo;hfkjsdhfklsdhf';
    user.save();
  });
}

const User = mongoose.model('user', UserSchema);

module.exports = User;
