const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ContractsController = require('../controllers/ContractsControllers');

router.route('/api/contracts/:id').get(ContractsController);
router.route('/api/contracts/:id').patch(ContractsController.update);
router.route('/api/contracts/new').post(ContractsController.new);
router.route('/api/contracts/:id').delete(ContractsController.delete);

// /req.params.id
module.exports = router;
