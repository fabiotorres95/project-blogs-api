const { Category } = require('../models');

const postNewCategory = async (newData) => {
  const created = await Category.create(newData);
  const data = created.toJSON();

  return { status: 'CREATED', data };
};

module.exports = {
  postNewCategory,
};