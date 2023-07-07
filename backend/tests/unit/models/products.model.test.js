const { expect } = require('chai');
const sinon = require('sinon');
const { connection } = require('../../../src/models');
const { productsModel } = require('../../../src/models');
const { productsFromModel, productIdFromModel } = require('../mocks/products.mock');

describe('Teste - PRODUCTS MODEL', function () {
  it('Testando a função findAll - PRODUCTS MODEL', async function () {
    sinon.stub(connection, 'execute').resolves([productsFromModel]);

    const products = await productsModel.findAll();

    expect(products).to.be.an('array');
    expect(products).to.be.deep.equal(productsFromModel);
  });

  it('Testando a função findById - PRODUCTS MODEL', async function () {
    sinon.stub(connection, 'execute').resolves([[productIdFromModel]]);

    const productId = 1;
    const product = await productsModel.findById(productId);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productIdFromModel);
  });

  it('Testando a função insert - PRODUCTS MODEL', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

    const productName = 'Livro Mágico';
    const productId = 4;
    const insert = await productsModel.insert(productName);

    expect(insert).to.be.an('number');
    expect(insert).to.be.deep.equal(productId);
  });

  afterEach(function () {
    sinon.restore();
  });
});
