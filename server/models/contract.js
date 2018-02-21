const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContractSchema = new Schema({
  typeId: {
    type: [Schema.Types.ObjectId],
    ref: 'Type',
    required: [true, 'Name field required'],
    unique: true
  },
  signingDate: {
    type: Date
  },
  effectiveDate: {
    type: Date
  },
  text: {
    type: String
  },
  lessorId: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  },
  lesseeId: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  },
  depositAmt: {
    type: Number
  },
  rentAmt: {
    type: Number
  },
  rentDueDate: {
    type: Date
  },
  customTerms: {
    type: String
  },
  utilityBills: {
    type: Boolean
  },
  waterBills: {
    type: Boolean
  },
  pets: {
    type: Number
  },
  moveOutDate: {
    type: Date
  }
});

const Contract = mongoose.model('contract', ContractSchema);

module.exports = Contract;
