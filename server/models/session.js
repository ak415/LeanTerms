const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema(
  {
    session: {
      _id: String,
      type: String,
      expires: Date
    }
  },
  { _id: false }
);

const Session = mongoose.model('session', SessionSchema);

module.exports = Session;
