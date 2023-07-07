const productsFromModel = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const productIdFromModel = {
  id: 1,
  name: 'Martelo de Thor',
};

const productsFromService = { status: 'SUCCESSFUL', data: productsFromModel };

const productIdFromService = { status: 'SUCCESSFUL', data: productIdFromModel };

const productsFromController = { status: 200, data: productsFromModel };

const productIdFromController = { status: 200, data: productIdFromModel };

const insertIdFromService = 4;

const productInsertFromService = { status: 'CREATED', data: insertIdFromService };

const postInsertFromController = { id: 4, name: 'Livro Mágico' };

const productPostInsertFromController = { status: 201, data: postInsertFromController };

module.exports = {
  productsFromModel,
  productIdFromModel,
  productsFromService,
  productIdFromService,
  productsFromController,
  productIdFromController,
  productInsertFromService,
  productPostInsertFromController,
  postInsertFromController,
};
