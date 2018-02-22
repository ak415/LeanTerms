const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = new Schema({
  description: {
    type: String
    ///month-to-month or fixed-term
  }
});

const Type = mongoose.model('type', TypeSchema);
module.exports = Type;
