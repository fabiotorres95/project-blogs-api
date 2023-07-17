const route = require('express').Router();
const { userController } = require('../controllers');
const { userChecks } = require('../middlewares');
const { verifyToken } = require('../auth/validateJWT');

route.post(
  '/',
  userChecks.nameLength,
  userChecks.checkEmail,
  userChecks.passwordLength,
  userController.newUser,
);

route.get(
  '/',
  verifyToken,
  userController.showAllUsers,
);

module.exports = route;