const express = require('express');
const { productsController } = require('../controllers');
const { 
  productsValidationAll,
  productsValidationById,
} = require('../middlewares/productsValidation');

const route = express.Router();

route.get('/', productsValidationAll, productsController.getAll);

route.get('/:idProduct', productsValidationById, productsController.getById);

module.exports = route;
