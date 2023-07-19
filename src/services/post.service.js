const { BlogPost, User, Category } = require('../models');

const getAllPosts = async () => {
  const data = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    }, {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });

  data.map((obj) => { 
    const newObj = obj;
    newObj.user = obj.users;
    return newObj; 
  });
  return { status: 'SUCCESSFULL', data };
};

module.exports = {
  getAllPosts,
};