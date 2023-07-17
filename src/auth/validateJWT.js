const secret = process.env.JWT_SECRET || 'segredaço';
const jwt = require('jsonwebtoken');
const { userServices } = require('../services');

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const verifyToken = async (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);

    const user = await userServices.getUserById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.user = user;
    
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  verifyToken,
};