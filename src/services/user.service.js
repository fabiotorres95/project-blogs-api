const { User } = require('../models');

const getAllUsers = async (noPassword) => {
  if (noPassword) {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return { status: 'SUCCESSFULL', data: users };
  } 

    const users = await User.findAll();
    return { status: 'SUCCESSFULL', data: users };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);

  return { status: 'SUCCESSFULL', data: user };
};

const postNewUser = async (data) => {
  const { email } = data;
  const users = await getAllUsers(false);
  const result = users.data.map((obj) => obj.email === email);
  if (result.includes(true)) {
    return { status: 'CONFLICT', data: undefined };
  }

  await User.create(data);
  return { status: 'CREATED', data };
};

module.exports = {
  getAllUsers,
  getUserById,
  postNewUser,
};