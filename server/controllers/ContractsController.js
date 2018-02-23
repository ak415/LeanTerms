const mongoose = require('mongoose');
const Contract = require('../models/contract');

const create = (req, res, next) => {
  Contract.create(req.body, (err, contract) => {
    if (err) return res.send(err.errmsg);
    res.send(contract);
  });
};

const show = (req, res, next) => {
  Contract.findById(req.params.id, (err, contract) => {
    if (err) {
      res.send('No contract found');
    } else {
      res.send(contract);
    }
  });
};

const update = (req, res, next) => {
  Contract.findById(req.params.id, (err, contract) => {
    if (err) return res.send(err.errmsg);
    res.send(contract);
  });
};

const destroy = (req, res, next) => {
  Contract.findById(req.params.id, (err, contract) => {
    if (err) return res.send("Can't delete record that does not exist");
    contract.remove();
    res.send(contract);
  });
};

module.exports = {
  create,
  show,
  update,
  destroy
};
