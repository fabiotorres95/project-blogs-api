const { getAllUsers } = require('./user.service');

const postNewLogin = async (email, password) => {
  const users = await getAllUsers(false);
  const result = users.data.map((obj) => obj.email === email && obj.password === password);
  console.log(result);
  if (result.includes(true)) {
    const id = result.findIndex((bool) => bool) + 1;
    return { status: 'SUCCESSFULL', data: { id, email, password } };
  }
  
  return { status: 'BAD REQUEST', data: undefined };
};

module.exports = {
  postNewLogin,
};