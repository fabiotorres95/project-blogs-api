const { postServices } = require('../services');
const httpStatus = require('../utils/status');

const showAllPosts = async (_req, res) => {
  const result = await postServices.getAllPosts();

  return res.status(httpStatus(result)).json(result.data);
};

module.exports = {
  showAllPosts,
};