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

module.exports = {
  salesFromModel,
  saleIdFromModel,
  salesFromService,
  saleIdFromService,
  salesFromController,
  saleIdFromController,
};
