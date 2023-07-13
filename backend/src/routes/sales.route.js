const express = require('express');
const { salesController } = require('../controllers');
const { 
  salesValidationAll,
  salesValidationById,
  salesValidationProductId,
  salesValidationQuantity,
  validateProductExist,
} = require('../middlewares/salesValidation');

const route = express.Router();

route.get('/', salesValidationAll, salesController.getAll);

route.get('/:idSale', salesValidationById, salesController.getById);

route.post(
  '/', 
  salesValidationProductId, 
  salesValidationQuantity, 
  validateProductExist, 
  salesController.postInsert,
);

module.exports = route;
