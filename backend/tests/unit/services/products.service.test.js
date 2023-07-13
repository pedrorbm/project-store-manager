const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const { 
  productsFromService, 
  productIdFromService,
  productsFromModel,
  productIdFromModel,
  productInsertFromService,
} = require('../mocks/products.mock');

describe('Teste - PRODUCTS SERVICE', function () {
  it('Testando a função findAll - PRODUCTS SERVICE', async function () {
    sinon.stub(productsModel, 'findAll').resolves(productsFromModel);

    const products = await productsService.findAll();

    expect(products).to.be.an('object');
    expect(products).to.be.deep.equal(productsFromService);
  });

  it('Testando a função findById - PRODUCTS SERVICE', async function () {
    sinon.stub(productsModel, 'findById').resolves(productIdFromModel);

    const product = await productsService.findById(1);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productIdFromService);
  });

  it('Testando a função insert - PRODUCTS SERVICE', async function () {
    sinon.stub(productsModel, 'insert').resolves(productInsertFromService.data);

    const productName = 'Livro Mágico';
    const insert = await productsService.insert(productName);

    expect(insert).to.be.an('object');
    expect(insert).to.be.deep.equal(productInsertFromService);
  });

  it('Testando a função update - PRODUCTS SERVICE', async function () {
    sinon.stub(productsModel, 'update').resolves(1);

    const update = await productsService.update('pedroo', 1);

    expect(update).to.be.an('object');
    expect(update).to.be.deep.equal({ status: 'SUCCESSFUL' });
  });

  afterEach(function () {
    sinon.restore();
  });
});
