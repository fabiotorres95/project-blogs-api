const { BlogPost } = require('../models');

const getAllPosts = async () => {
  const data = await BlogPost.findAll();

  return { status: 'SUCCESSFULL', data };
};

// [
//   {
//     blogpost id,
//     blogpost title,
//     blogpost content,
//     blogpost userId,
//     blogpost published,
//     blogpost updated,
//     chave user: {
//       user id
//       user displayName
//       user email
//       user image
//     },
//     chave categories: [
//       {
//         categories id,
//         categories name,
//       },
//       {
//         categories id,
//         ...
//       },
//       ...
//     ]
//   }, {
//     blogpost id,
//     ...
//   },
//   ...
// ]

module.exports = {
  getAllPosts,
};