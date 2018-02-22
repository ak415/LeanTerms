const mongoose = require('mongoose');
const Contract = require('../models/contract');

const show = (req, res, next) => {
  Contract.findById(req);
};

module.exports = {
  show
};
