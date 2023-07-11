const { expect } = require('chai');
const sinon = require('sinon');
const { validateInsert } = require('../../../../src/services/validations/validationsInputValues');
const { 
  validateInsertProductId,
  validateInsertProductIdResult,
  validateInsertQuantity,
  validateInsertQuantityResult,
  validateInsertQuantityMin,
  validateInsertQuantityMinResult,
} = require('../../mocks/sales.mock');

describe('Teste - SALES SERVICE/VALIDATIONS', function () {
  it('Testando a função validateInsert faltando a chave "productId" - SALES SERVICE/VALIDATIONS', async function () {
    const validate = validateInsert(validateInsertProductId);

    expect(validate).to.be.an('object');
    expect(validate).to.be.deep.equal(validateInsertProductIdResult);
  });

  it('Testando a função validateInsert faltando a chave "quantity" - SALES SERVICE/VALIDATIONS', async function () {
    const validate = validateInsert(validateInsertQuantity);

    expect(validate).to.be.an('object');
    expect(validate).to.be.deep.equal(validateInsertQuantityResult);
  });

  it('Testando a função validateInsert o valor da chave quantity menor ou igual a 0 - SALES SERVICE/VALIDATIONS', async function () {
    const validate = validateInsert(validateInsertQuantityMin);

    expect(validate).to.be.an('object');
    expect(validate).to.be.deep.equal(validateInsertQuantityMinResult);
  });

  afterEach(function () {
    sinon.restore();
  });
});
