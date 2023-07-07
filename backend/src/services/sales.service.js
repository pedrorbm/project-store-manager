const { salesModel } = require('../models');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { status: 'SUCCESSFUL', data: sales };
};

const findById = async (idSale) => {
  const sale = await salesModel.findById(idSale);
  return { status: 'SUCCESSFUL', data: sale };
};

module.exports = {
  findAll,
  findById,
};
