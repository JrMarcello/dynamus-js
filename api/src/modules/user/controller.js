import * as model from './model';

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const getAll = async (request, response) => {
  // logInfo('[USER][/GET] HTTP Request :: getAll method');

  try {
    response.json(await model.getAll());
  } catch (error) {
    // Printar erro no log e/ou console
    response.status(500).json(error);
  }
};

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const getById = async (request, response) => {
  // logInfo('[USER][/GET] HTTP Request :: get method');

  try {
    response.json(await model.getById(request.params.id));
  } catch (error) {
    // Printar erro no log e/ou console
    response.status(500).json(error);
  }
};

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const create = async (request, response) => {
  // logInfo('[USER][/POST] HTTP Request :: create method');

  try {
    response.json(await model.create(request.body));
  } catch (error) {
    // Printar erro no log e/ou console
    response.status(500).json(error);
  }
};

/**
* @param {Object} request - HTTP request
* @param {Object} response - HTTP response
* @returns {Object} HTTP response with status code and data
*/
export const update = async (request, response) => {
  // logInfo('[CLASS][/PUT] HTTP Request :: update method');

  try {
    request.body.id = request.params.id
    response.json(await model.update(request.body));
  } catch (error) {
    // Printar erro no log e/ou console
    response.status(500).json(error);
  }
};

/**
* @param {Object} request - HTTP request
* @param {Object} response - HTTP response
* @returns {Object} HTTP response with status code and data
*/
export const remove = async (request, response) => {
  // logInfo('[CLASS][/DELETE] HTTP Request :: remove method');

  try {
    response.json(await model.remove(request.params.id));
  } catch (error) {
    // Printar erro no log e/ou console
    response.status(500).json(error);
  }
};
