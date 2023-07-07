const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { 
  productsFromService, 
  productIdFromService,
  productsFromModel,
  productIdFromModel,
} = require('../mocks/products.mock');

chai.use(sinonChai);

describe('Teste - SALES CONTROLLER', function () {
  it('Testando a função getAll - SALES CONTROLLER', async function () {
    sinon.stub(productsService, 'findAll').resolves(productsFromService);

    const req = { params: { }, body: { } };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };

    await productsController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsFromModel);
  });

  it('Testando a função getById - SALES CONTROLLER', async function () {
    sinon.stub(productsService, 'findById').resolves(productIdFromService);

    const req = { params: { idProduct: 1 }, body: { } };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };

    await productsController.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productIdFromModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});
