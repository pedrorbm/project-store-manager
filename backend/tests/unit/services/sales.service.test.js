const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { 
  salesFromService, 
  saleIdFromService,
  salesFromModel,
  saleIdFromModel,
  salesInsertFromService,
  salesInsertFromModel,
} = require('../mocks/sales.mock');

describe('Teste - SALES SERVICE', function () {
  it('Testando a função findAll - SALES SERVICE', async function () {
    sinon.stub(salesModel, 'findAll').resolves(salesFromModel);

    const sales = await salesService.findAll();

    expect(sales).to.be.an('object');
    expect(sales).to.be.deep.equal(salesFromService);
  });

  it('Testando a função findById - SALES SERVICE', async function () {
    sinon.stub(salesModel, 'findById').resolves(saleIdFromModel);

    const sale = await salesService.findById(1);

    expect(sale).to.be.an('object');
    expect(sale).to.be.deep.equal(saleIdFromService);
  });

  it('Testando a função insert - SALES SERVICE', async function () {
    sinon.stub(salesModel, 'insert').resolves(3);

    const insert = await salesService.insert(salesInsertFromModel);

    expect(insert).to.be.an('object');
    expect(insert).to.be.deep.equal(salesInsertFromService);
  });

  afterEach(function () {
    sinon.restore();
  });
});
