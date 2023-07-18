const route = require('express').Router();
const { verifyToken } = require('../auth/validateJWT');
const { categoriesController } = require('../controllers');

route.post(
  '/',
  verifyToken,
  categoriesController.newCategory,
);

route.get(
  '/',
  verifyToken,
  categoriesController.showAllCategories,
);

module.exports = route;