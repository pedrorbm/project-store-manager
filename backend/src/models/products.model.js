const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products;',
  );
  return products;
};

const findById = async (idProduct) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?;',  
    [idProduct],
  );
  return product;
};

const insert = async (nameProduct) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [nameProduct],
  );
  return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};
