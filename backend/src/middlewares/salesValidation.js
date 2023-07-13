const { salesModel, productsModel } = require('../models');
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

const salesValidationProductId = async (req, res, next) => {
  const saleInsert = req.body;

  const searchProductId = saleInsert.some((sale) => sale.productId === undefined);
  if (searchProductId) {
    return res.status(mapStatusHTTP('REQUIRED')).json({ message: '"productId" is required' });
  }

  return next();
};

const salesValidationQuantity = async (req, res, next) => {
  const saleInsert = req.body;

  const searchQuantity = saleInsert.some((sale) => sale.quantity === undefined);
  if (searchQuantity) {
    return res.status(mapStatusHTTP('REQUIRED')).json({ message: '"quantity" is required' });
  }

  const quantityMin = saleInsert.some((sale) => sale.quantity <= 0);
  if (quantityMin) {
    return res.status(mapStatusHTTP('INVALID_VALUE'))
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }

  return next();
};

const validate = async (id) => {
  const product = await productsModel.findById(id);
  if (!product) {
    return { status: mapStatusHTTP('NOT_FOUND'), data: { message: 'Product not found' } };
  }
  return product;
};

const validateProductExist = async (req, res, next) => {
  const saleInsert = req.body;

  const searchProduct = await Promise.all(saleInsert.map((sale) => validate(sale.productId)));

  if (searchProduct.some((product) => product.status)) {
    return res.status(mapStatusHTTP('NOT_FOUND')).json({ message: 'Product not found' });
  }

  return next();
};

module.exports = {
  salesValidationAll,
  salesValidationById,
  salesValidationProductId,
  salesValidationQuantity,
  validateProductExist,
};
