const { Category } = require('../models');

const postNewCategory = async (newData) => {
  const created = await Category.create(newData);
  const data = created.toJSON();

  return { status: 'CREATED', data };
};

const getAllCategories = async () => {
  const data = await Category.findAll();

  return { status: 'SUCCESSFULL', data };
};

module.exports = {
  postNewCategory,
  getAllCategories,
};