const { categoriesServices } = require('../services');
const httpStatus = require('../utils/status');

const newCategory = async (req, res) => {
  const data = req.body;

  if (!data.name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const result = await categoriesServices.postNewCategory(data);

  return res.status(httpStatus(result).json(result.data));
};

module.exports = {
  newCategory,
};