const route = require('express').Router();
const { loginController } = require('../controllers');

route.post('/', loginController.newLogin);

module.exports = route;