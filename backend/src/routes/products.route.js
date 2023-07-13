const express = require('express');
const { productsController } = require('../controllers');
const { 
  productsValidationAll,
  productsValidationById,
  productsValidationInsert,
} = require('../middlewares/productsValidation');

const route = express.Router();

route.get('/', productsValidationAll, productsController.getAll);

route.get('/:idProduct', productsValidationById, productsController.getById);

route.post('/', productsValidationInsert, productsController.postInsert);

route.put(
  '/:idProduct',
  productsValidationInsert,
  productsValidationById,
  productsController.putUpdate,
);

module.exports = route;
