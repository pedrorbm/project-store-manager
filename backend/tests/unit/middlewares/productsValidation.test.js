const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const productsValidation = require('../../../src/middlewares/productsValidation');

chai.use(sinonChai);

describe('Teste - PRODUCTS MIDDLEWARE', function () {
  it('Testando a função productsValidationInsert estando correta - PRODUCTS MIDDLEWARE', async function () {
    const req = { params: { }, body: { name: 'Livro Mágico' } };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
    };
    const next = sinon.stub().returns();

    productsValidation.productsValidationInsert(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Testando a função productsValidationInsert caso esteja sem a chave "name" - PRODUCTS MIDDLEWARE', async function () {
    const req = { params: { }, body: { nam: 'Livro Mágico' } };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    productsValidation.productsValidationInsert(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(sinon.match({ message: '"name" is required' }));
    expect(next).to.have.not.been.calledWith();
  });

  it('Testando a função productsValidationInsert caso o valor da chave "name" seja menor que 5 caracteres - PRODUCTS MIDDLEWARE', async function () {
    const req = { params: { }, body: { name: 'Liv' } };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    productsValidation.productsValidationInsert(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(sinon.match({ message: '"name" length must be at least 5 characters long' }));
    expect(next).to.have.not.been.calledWith();
  });

  afterEach(function () {
    sinon.restore();
  });
});