const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ContractsController = require('../controllers/ContractsControllers');

router.route('/api/contract/:id').get(ContractsController.show);

module.exports = router;
