const status2 = (serviceResponse) => {
  let result;
  switch (serviceResponse.status) {
    case 'NOT FOUND':
      result = 404;
      break;
    default:
      result = 500;
  }

  return result;
};

const status = (serviceResponse) => {
  let result;
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
      result = status2(serviceResponse);
  }

  return result;
};

module.exports = status;