const nameLength = (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' }); 
  }

  next();
};

const checkEmail = (req, res, next) => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const { email } = req.body;

  if (!regex.test(email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }

  next();
};

const passwordLength = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' }); 
  }

  next();
};

module.exports = {
  nameLength,
  checkEmail,
  passwordLength,
};