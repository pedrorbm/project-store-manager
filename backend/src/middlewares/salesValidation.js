const { salesModel } = require('../models');
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

module.exports = {
  salesValidationAll,
  salesValidationById,
};
