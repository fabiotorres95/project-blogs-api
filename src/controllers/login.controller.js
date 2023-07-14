const jwt = require('jsonwebtoken');
const { loginServices } = require('../services');

const secret = process.env.JWT_SECRET || 'segredo';

const newLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const { data } = await loginServices.postNewLogin(email, password);
  console.log(data);

  if (data === undefined) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ email: data.email }, secret, jwtConfig);
  return res.status(200).json({ token });
};

module.exports = {
  newLogin,
};