const jwt = require('jsonwebtoken');
const { userServices } = require('../services');
const httpStatus = require('../utils/status');

const secret = process.env.JWT_SECRET || 'segredaço';

const newUser = async (req, res) => {
  const newData = req.body;

  const result = await userServices.postNewUser(newData);

  if (result.data === undefined) {
    return res.status(httpStatus(result)).json({ message: 'User already registered',
  });
  }

  console.log(result);

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(
    { displayName: result.data.displayName, email: result.data.email },
    secret,
    jwtConfig,
  );

  return res.status(httpStatus(result)).json({ token });
};

module.exports = {
  newUser,
};