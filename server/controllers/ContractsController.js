const mongoose = require('mongoose');
const Contract = require('../models/contract');

const index = (req, res, next) => {
  let allContracts = [];
  Contract.find(
    {
      $or: [
        { landlordId: req.params.user_id },
        { tenantId: req.params.user_id }
      ]
    },
    (err, returnedContracts) => {
      if (err) return res.send(err.errmsg);
      if (!returnedContracts) {
        res.send("You don't have any contracts");
      } else {
        res.send(returnedContracts);
      }
    }
  );
};

const create = (req, res, next) => {
  Contract.create(req.body, (err, contract) => {
    if (err) return res.send(err.errmsg);
    res.send(contract);
  });
};

const show = (req, res, next) => {
  Contract.findById(req.params.id, (err, contract) => {
    if (err) return res.send(err.errmsg);
    if (!contract) {
      res.send('Could not find contract with that ID');
    } else {
      res.send(contract);
    }
  });
};

const update = (req, res, next) => {
  Contract.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true, upsert: true, runValidators: true },
    (err, updatedContract) => {
      if (err) return res.send(err.errmsg);
      if (!updatedContract) return res.send("Can't find that contract");
      res.send(updatedContract);
    }
  );
};

const destroy = (req, res, next) => {
  Contract.findById(req.params.id, (err, contract) => {
    if (err) return res.send(err.errmsg);
    if (!contract) return res.send("Can't delete record that does not exist");
    contract.remove();
    res.send(contract);
  });
};

module.exports = {
  index,
  create,
  show,
  update,
  destroy
};
