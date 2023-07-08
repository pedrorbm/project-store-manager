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

module.exports = {
  findAll,
  findById,
};
