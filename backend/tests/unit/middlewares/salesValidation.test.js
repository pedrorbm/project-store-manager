const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const salesValidation = require('../../../src/middlewares/salesValidation');
const { salesModel } = require('../../../src/models');

chai.use(sinonChai);

describe('Teste - SALES MIDDLEWARE', function () {
  it('Testando a função salesValidationProductId estando correta - SALES MIDDLEWARE', async function () {
    const req = { 
      params: { }, 
      body: [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    salesValidation.salesValidationProductId(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Testando a função productsValidationInsert caso esteja sem a chave "productId" - SALES MIDDLEWARE', async function () {
    const req = { 
      params: { }, 
      body: [
        {
          productI: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    salesValidation.salesValidationProductId(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"productId" is required' });
  });

  it('Testando a função salesValidationQuantity estando correta - SALES MIDDLEWARE', async function () {
    const req = { 
      params: { }, 
      body: [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    salesValidation.salesValidationQuantity(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Testando a função salesValidationQuantity caso esteja sem a chave "quantity" - SALES MIDDLEWARE', async function () {
    const req = { 
      params: { }, 
      body: [
        {
          productId: 1,
          quantit: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    salesValidation.salesValidationQuantity(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" is required' });
  });

  it('Testando a função salesValidationQuantity caso a chave "quantity" tenha valor <= 0 - SALES MIDDLEWARE', async function () {
    const req = { 
      params: { }, 
      body: [
        {
          productId: 1,
          quantity: 0,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    salesValidation.salesValidationQuantity(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });

  afterEach(function () {
    sinon.restore();
  });
});