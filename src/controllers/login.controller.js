const jwt = require('jsonwebtoken');
const { loginServices } = require('../services');
const status = require('../utils/status');

const secret = process.env.JWT_SECRET || 'segredo';

const newLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const result = await loginServices.postNewLogin(email, password);

  if (result.data === undefined) {
    return res.status(status(result)).json({ message: 'Invalid fields' });
  }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ email: result.data.email }, secret, jwtConfig);
  return res.status(status(result)).json({ token });
};

module.exports = {
  newLogin,
};