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

  afterEach(function () {
    sinon.restore();
  });
});