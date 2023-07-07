const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products;',
  );
  return camelize(products);
};

const findById = async (idProduct) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?;',  
    [idProduct],
  );
  return camelize(product);
};

module.exports = {
  findAll,
  findById,
};
