const route = require('express').Router();
const { verifyToken } = require('../auth/validateJWT');
const { postController } = require('../controllers');

route.get(
  '/',
  verifyToken,
  postController.showAllPosts,
);

module.exports = route;