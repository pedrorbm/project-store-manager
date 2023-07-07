const express = require('express');
const { productsController } = require('../controllers');
const { 
  productsValidationAll,
  productsValidationById,
} = require('../middlewares/productsValidation');

const route = express.Router();

route.get('/', productsValidationAll, productsController.findAll);

route.get('/:idProduct', productsValidationById, productsController.findById);

module.exports = route;
