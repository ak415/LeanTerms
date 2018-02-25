const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContractSchema = new Schema({
  specialID: {
    type: Number,
    unique: true
  },
  landlordFullName: {
    type: String
  },
  tenantFullName: {
    type: String
  },
  leaseType: {
    type: String
  },
  effectiveDate: {
    type: Date
  },
  leaseStartDate: {
    type: Date
  },
  vacateNotice: {
    type: Number
  },
  propertyType: {
    type: String
  },
  propertyStreetAddress: {
    type: String
  },
  propertyAddressLine2: {
    type: String
  },
  propertyCity: {
    type: String
  },
  propertyState: {
    type: String
  },
  propertyZipCode: {
    type: Number
  },
  furnished: {
    type: Boolean
  },
  parkingAvailable: {
    type: Boolean
  },
  landlordStreetAddress: {
    type: String
  },
  landlordAddressLine2: {
    type: String
  },
  landlordCity: {
    type: String
  },
  landlordState: {
    type: String
  },
  landlordZipCode: {
    type: String
  },
  tenantStreetAddress: {
    type: String
  },
  tenantAddressLine2: {
    type: String
  },
  tenantCity: {
    type: String
  },
  tenantState: {
    type: String
  },
  tenantZipCode: {
    type: String
  },
  landlordId: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  },
  tenantId: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  },
  rentAmount: {
    type: Number
  },
  rentDueDate: {
    type: Number
  },
  paymentMethod: {
    type: String
  },
  depositRequired: {
    type: Boolean
  },
  depositAmount: {
    type: Number
  },
  depositDueDate: {
    type: String
  },
  firstLastMonthRequirements: {
    type: String
  },
  lateFee: {
    type: Boolean
  },
  lateFeeAmount: {
    type: Number
  },
  utilityBillsIncluded: {
    type: Boolean
  },
  petsAllowed: {
    type: Boolean
  },
  sublettingAllowed: {
    type: Boolean
  },
  guestsAllowed: {
    type: Boolean
  },
  scheduledSigningDate: {
    type: Date
  }
});

const Contract = mongoose.model('contract', ContractSchema);
module.exports = Contract;
