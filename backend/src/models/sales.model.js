const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection.execute(
    `SELECT * FROM sales_products AS sp 
    INNER JOIN sales AS s 
    ON sp.sale_id = s.id;`,
  );
  return camelize(sales);
};

const findById = async (idSale) => {
  const [sale] = await connection.execute(
    `SELECT * FROM sales_products AS sp
    INNER JOIN sales AS s 
    ON sp.sale_id = s.id
    WHERE s.id = ?;`,
    [idSale],
  );
  return camelize(sale);
};

const insert = async (array) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUES (NOW());',
  );
  const arrayReturn = array.map((object) => connection.execute(
    `INSERT INTO sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`,
    [insertId, object.productId, object.quantity],
  ));

  await Promise.all(arrayReturn);
  return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};
