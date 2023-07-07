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

  afterEach(function () {
    sinon.restore();
  });
});
