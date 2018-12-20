import * as model from './model';

/**
* @param {Object} request - HTTP request
* @param {Object} response - HTTP response
* @returns {Object} HTTP response with status code and data
*/
export const login = async (request, response) => {
  // logInfo('[AUTH] - [/POST] HTTP Request :: login method');

  try {
    response.json(await model.login(request.body));
  } catch (e) {
    response.status(401).json(e);
  }
};
