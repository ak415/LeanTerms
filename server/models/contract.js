const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContractSchema = new Schema({
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

const Contract = mongoose.model('contract', ContractSchema);

module.exports = Contract;
