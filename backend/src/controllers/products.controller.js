const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { productsService } = require('../services');

const getAll = async (req, res) => {
  const { status, data } = await productsService.findAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { idProduct } = req.params;
  const { status, data } = await productsService.findById(Number(idProduct));
  return res.status(mapStatusHTTP(status)).json(data);
};

const postInsert = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await productsService.insert(name);
  const dataFormatted = { id: data, name };
  return res.status(mapStatusHTTP(status)).json(dataFormatted);
};

const putUpdate = async (req, res) => {
  const { idProduct } = req.params;
  const { name } = req.body;
  const { status } = await productsService.update(name, idProduct);
  const dataFormatted = { id: idProduct, name };
  return res.status(mapStatusHTTP(status)).json(dataFormatted);
};

module.exports = {
  getAll,
  getById,
  postInsert,
  putUpdate,
};
