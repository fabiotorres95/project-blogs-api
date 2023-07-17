const { getAllUsers } = require('./user.service');

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
  postNewLogin,
};