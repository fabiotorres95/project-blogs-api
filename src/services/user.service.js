const { User } = require('../models');

const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

const postNewUser = async (data) => {
  const { email } = data;
  const users = await getAllUsers();
  const result = users.map((obj) => obj.email === email);
  if (result.includes(true)) {
    return { status: 'CONFLICT', data: undefined };
  }

  await User.create(data);
  return { status: 'CREATED', data };
};

module.exports = {
  getAllUsers,
  postNewUser,
};