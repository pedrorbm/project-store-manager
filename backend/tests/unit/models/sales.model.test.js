const { expect } = require('chai');
const sinon = require('sinon');
const { connection } = require('../../../src/models');
const { salesModel } = require('../../../src/models');
const { salesFromModel, saleIdFromModel } = require('../mocks/sales.mock');

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

  afterEach(function () {
    sinon.restore();
  });
});
