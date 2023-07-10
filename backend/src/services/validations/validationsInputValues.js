const { keysObject, quantityMin } = require('./schemas');

const validateInsert = (object) => {
  const { error: keys } = keysObject
    .validate(object);
  if (keys) return { status: 'REQUIRED', message: keys.message };

  const { error: quantity } = quantityMin
    .validate(object);
  if (quantity) return { status: 'INVALID_VALUE', message: quantity.message };
};

module.exports = {
  validateInsert,
};
