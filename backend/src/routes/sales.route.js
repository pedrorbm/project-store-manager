const express = require('express');
const { salesController } = require('../controllers');
const { salesValidationAll, salesValidationById } = require('../middlewares/salesValidation');

const route = express.Router();

route.get('/', salesValidationAll, salesController.getAll);

route.get('/:idSale', salesValidationById, salesController.getById);

module.exports = route;
