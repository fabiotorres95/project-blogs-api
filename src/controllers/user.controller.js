const jwt = require('jsonwebtoken');
const { userServices } = require('../services');

const secret = process.env.JWT_SECRET || 'segredaço';

const newUser = async (req, res) => {
  const newData = req.body;

  const { data } = await userServices.postNewUser(newData);

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(
    { displayName: data.displayName, email: data.email },
    secret,
    jwtConfig,
  );

  return res.status(201).json(token);
};

module.exports = {
  newUser,
};