const { expect } = require('chai');
const sinon = require('sinon');
const { connection } = require('../../../src/models');
const { salesModel } = require('../../../src/models');
const { 
  salesFromModel,
  saleIdFromModel,
  salesInsertFromModel,
} = require('../mocks/sales.mock');

describe('Teste - SALES MODEL', function () {
  it('Testando a função findAll - SALES MODEL', async function () {
    sinon.stub(connection, 'execute').resolves([salesFromModel]);

    const findAll = await salesModel.findAll();

    expect(findAll).to.be.an('array');
    expect(findAll).to.be.deep.equal(salesFromModel);
  });

  it('Testando a função findById - SALES MODEL', async function () {
    sinon.stub(connection, 'execute').resolves([saleIdFromModel]);

    const findById = await salesModel.findById(1);

    expect(findById).to.be.an('array');
    expect(findById).to.be.deep.equal(saleIdFromModel);
  });

  it('Testando a função insert - SALES MODEL', async function () {
    sinon.stub(connection, 'execute')
      .onFirstCall()
      .resolves([{ insertId: 3 }])
      .onSecondCall()
      .resolves([3, 1, 1]);

    const insert = await salesModel.insert(salesInsertFromModel);

    expect(insert).to.be.an('number');
    expect(insert).to.be.deep.equal(3);
  });

  afterEach(function () {
    sinon.restore();
  });
});
