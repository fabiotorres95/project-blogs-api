const status = (serviceResponse) => {
  let result = 500;
  switch (serviceResponse.status) {
    case 'SUCCESSFULL':
      result = 200;
      break;
    case 'CREATED':
      result = 201;
      break;
    case 'BAD REQUEST':
      result = 400;
      break;
    case 'CONFLICT':
      result = 409;
      break;
    default:
      result = 500;
  }

  return result;
};

module.exports = status;