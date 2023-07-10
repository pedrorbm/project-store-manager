const { salesModel } = require('../models');
const { 
  validateInsert,
} = require('./validations/validationsInputValues');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { status: 'SUCCESSFUL', data: sales };
};

const findById = async (idSale) => {
  const sale = await salesModel.findById(idSale);
  return { status: 'SUCCESSFUL', data: sale };
};

const insert = async (array) => {
  const error = validateInsert(array[0]);
  if (error) return { status: error.status, data: { message: error.message } };

  const insertId = await salesModel.insert(array);
  return { status: 'CREATED', data: insertId };
};

module.exports = {
  findAll,
  findById,
  insert,
};
