const { productsModel } = require('../models');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const productsValidationAll = async (req, res, next) => {
  const products = await productsModel.findAll();
  if (!products) { 
    return res.status(mapStatusHTTP('NOT_FOUND')).json({ message: 'Products not found' }); 
  }

  next();
};

const productsValidationById = async (req, res, next) => {
  const { idProduct } = req.params;
  const products = await productsModel.findById(idProduct);
  if (!products) { 
    return res.status(mapStatusHTTP('NOT_FOUND')).json({ message: 'Product not found' }); 
  }

  next();
};

const productsValidationInsert = async (req, res, next) => {
  const { body } = req;

  if (!body.name) {
    return res.status(mapStatusHTTP('REQUIRED')).json({ message: '"name" is required' });
  }

  if (body.name.length < 5) {
    return res.status(mapStatusHTTP('INVALID_VALUE'))
      .json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

module.exports = {
  productsValidationAll,
  productsValidationById,
  productsValidationInsert,
};
