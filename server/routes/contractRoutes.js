const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ContractsController = require('../controllers/ContractsController');

router.route('/api/:user_id/contracts').get(ContractsController.index);
router.route('/api/contracts').post(ContractsController.create);
router.route('/api/contracts/:id').get(ContractsController.show);
router.route('/api/contracts/:id').patch(ContractsController.update);
router.route('/api/contracts/:id').delete(ContractsController.destroy);

module.exports = router;
