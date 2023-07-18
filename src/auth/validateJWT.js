const secret = process.env.JWT_SECRET || 'segredaço';
const jwt = require('jsonwebtoken');
const { userServices } = require('../services');

const extractToken = (bearerToken) => {
  if (bearerToken.includes(' ')) {
    return bearerToken.split(' ')[1];
  }

  return bearerToken;
};
  
const verifyToken = async (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);

    const { data } = await userServices.getUserById(Number(decoded.id));

    if (data === undefined) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.user = data;
    
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  verifyToken,
};