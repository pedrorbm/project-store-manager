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

module.exports = {
  getAll,
  getById,
};
