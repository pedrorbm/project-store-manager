const { salesModel } = require('../models');
const { productsModel } = require('../models');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const salesValidationAll = async (req, res, next) => {
  const sales = await salesModel.findAll();
  if (!sales) { 
    return res.status(mapStatusHTTP('NOT_FOUND')).json({ message: 'Sales not found' });
  }

  next();
};

const salesValidationById = async (req, res, next) => {
  const { idSale } = req.params;
  const [sale] = await salesModel.findById(idSale);
  if (!sale) { 
    return res.status(mapStatusHTTP('NOT_FOUND')).json({ message: 'Sale not found' });
  }

  next();
};

const salesValidationInsert = async (req, res, next) => {
  const [{ productId }] = req.body;

  if (!productId) return next();

  const product = await productsModel.findById(productId);

  if (!product) {
    return res.status(mapStatusHTTP('NOT_FOUND')).json({ message: 'Product not found' });
  }

  next();
};

module.exports = {
  salesValidationAll,
  salesValidationById,
  salesValidationInsert,
};
