const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = new Schema({
  description: {
    type: String
  },
  text: {
    type: String
  }
});

const Type = mongoose.model('contract', TypeSchema);
module.exports = Type;
