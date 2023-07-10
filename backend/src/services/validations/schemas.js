const Joi = require('joi');

const keysObject = Joi.object({
  productId: Joi.required(), 
  quantity: Joi.required(),
});

const quantityMin = Joi.object({
  productId: Joi.number().min(1),
  quantity: Joi.number().min(1), 
});

module.exports = {
  keysObject,
  quantityMin,
};
