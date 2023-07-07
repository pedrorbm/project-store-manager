const { productsModel } = require('../models');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
};

const findById = async (idProduct) => {
  const product = await productsModel.findById(idProduct);
  return { status: 'SUCCESSFUL', data: product };
};

const insert = async (nameProduct) => {
  const insertId = await productsModel.insert(nameProduct);
  return { status: 'CREATED', data: insertId };
};

module.exports = {
  findAll,
  findById,
  insert,
};
