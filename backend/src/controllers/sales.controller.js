const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { salesService } = require('../services');

const getAll = async (req, res) => {
  const { status, data } = await salesService.findAll();
  const dataFormatted = [];
  data.map(({ saleId, date, productId, quantity }) => dataFormatted
    .push({ saleId, date, productId, quantity }));
  return res.status(mapStatusHTTP(status)).json(dataFormatted);
};

const getById = async (req, res) => {
  const { idSale } = req.params;
  const { status, data } = await salesService.findById(Number(idSale));
  const dataFormatted = [];
  data.map(({ date, productId, quantity }) => dataFormatted
  .push({ date, productId, quantity }));
  return res.status(mapStatusHTTP(status)).json(dataFormatted);
};

const postInsert = async (req, res) => {
  const { body } = req;
  const { status, data } = await salesService.insert(body);
  const dataFormatted = { id: data, itemsSold: body };
  return res.status(mapStatusHTTP(status)).json(dataFormatted);
};

module.exports = {
  getAll,
  getById,
  postInsert,
};
