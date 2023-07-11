const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { 
  salesFromService, 
  saleIdFromService,
  salesFromModel,
  saleIdFromModel,
  salesInsertFromController,
  salesInsertFromService,
} = require('../mocks/sales.mock');

chai.use(sinonChai);

describe('Teste - SALES CONTROLLER', function () {
  it('Testando a função getAll - SALES CONTROLLER', async function () {
    sinon.stub(salesService, 'findAll').resolves(salesFromService);

    const req = { params: { }, body: { } };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };

    await salesController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesFromModel);
  });

  it('Testando a função getById - SALES CONTROLLER', async function () {
    sinon.stub(salesService, 'findById').resolves(saleIdFromService);

    const req = { params: { idSale: 1 }, body: { } };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };

    await salesController.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleIdFromModel);
  });

  it('Testando a função postInsert sem erro - SALES CONTROLLER', async function () {
    sinon.stub(salesService, 'insert').resolves(salesInsertFromService);

    const req = {
      params: { }, 
      body: [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 5 }],
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };

    await salesController.postInsert(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(salesInsertFromController);
  });

  it('Testando a função postInsert com erro - SALES CONTROLLER', async function () {
    sinon.stub(salesService, 'insert').resolves(salesInsertFromService);

    const req = {
      params: { }, 
      body: [{ productId: 1, quantity: 1 }],
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };

    await salesController.postInsert(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(salesInsertFromController);
  });

  afterEach(function () {
    sinon.restore();
  });
});