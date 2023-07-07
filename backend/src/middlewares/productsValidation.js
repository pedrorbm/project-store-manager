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

module.exports = {
  productsValidationAll,
  productsValidationById,
};
