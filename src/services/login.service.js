const { User } = require('../models');

const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

const postNewLogin = async (email, password) => {
  const users = await getAllUsers();
  const result = users.map((obj) => obj.email === email && obj.password === password);
  console.log(result);
  if (result.includes(true)) {
    return { status: 'SUCCESSFULL', data: { email, password } };
  }
  
  return { status: 'BAD REQUEST', data: undefined };
};

module.exports = {
  getAllUsers,
  postNewLogin,
};