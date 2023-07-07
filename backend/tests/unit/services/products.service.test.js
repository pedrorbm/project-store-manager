const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const { 
  productsFromService, 
  productIdFromService,
  productsFromModel,
  productIdFromModel,
} = require('../mocks/products.mock');

describe('Teste - PRODUCTS SERVICE', function () {
  it('Testando o retorno da função findAll service', async function () {
    sinon.stub(productsModel, 'findAll').resolves(productsFromModel);

    const products = await productsService.findAll();

    expect(products).to.be.an('object');
    expect(products).to.be.deep.equal(productsFromService);
  });

  it('Testando o retorno da função findById service', async function () {
    sinon.stub(productsModel, 'findById').resolves(productIdFromModel);

    const product = await productsService.findById(1);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productIdFromService);
  });

  afterEach(function () {
    sinon.restore();
  });
});
