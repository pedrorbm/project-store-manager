const date = '2023-07-07T07:46:38.000Z';

const salesFromModel = [
  {
    saleId: 1,
    date,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date,
    productId: 3,
    quantity: 15,
  },
];

const saleIdFromModel = [
  {
    date,
    productId: 1,
    quantity: 5,
  },
  {
    date,
    productId: 2,
    quantity: 10,
  },
];

const salesFromService = { status: 'SUCCESSFUL', data: salesFromModel };

const saleIdFromService = { status: 'SUCCESSFUL', data: saleIdFromModel };

const salesFromController = { status: 200, data: salesFromModel };

const saleIdFromController = { status: 200, data: saleIdFromModel };

const insertIdFromService = 3;

const salesInsertFromModel = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const salesInsertFromService = { status: 'CREATED', data: insertIdFromService };

const salesInsertFromController = { id: insertIdFromService, itemsSold: salesInsertFromModel };

const validateInsertProductId = { productI: 2, quantity: 2 };

const validateInsertProductIdResult = { status: 'REQUIRED', message: '"productId" is required' };

const validateInsertQuantity = { productId: 2, quantit: 2 };

const validateInsertQuantityResult = { status: 'REQUIRED', message: '"quantity" is required' };

const validateInsertQuantityMin = { productId: 2, quantity: 0 };

const validateInsertQuantityMinResult = { 
  status: 'INVALID_VALUE',
  message: '"quantity" must be greater than or equal to 1',
};

const salesInsertResultFromController = [
  {
    productId: 1,
    quantity: 1,
  },
];

const salesInsertErrorFromController = {
  id: insertIdFromService,
  itemsSold: salesInsertResultFromController, 
};

module.exports = {
  salesFromModel,
  saleIdFromModel,
  salesFromService,
  saleIdFromService,
  salesFromController,
  saleIdFromController,
  salesInsertFromModel,
  salesInsertFromService,
  salesInsertFromController,
  validateInsertProductId,
  validateInsertProductIdResult,
  validateInsertQuantity,
  validateInsertQuantityResult,
  validateInsertQuantityMin,
  validateInsertQuantityMinResult,
  salesInsertErrorFromController,
};
