import * as model from './model';

/**
* @param {Object} request - HTTP request
* @param {Object} response - HTTP response
* @returns {Object} HTTP response with status code and data
*/
export const getAll = async (request, response) => {
  // logInfo('[MEMBER] - [/GET] HTTP Request :: getAll method');

  try {
    response.json(await model.getAll(request.params));
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
export const getOne = async (request, response) => {
  // logInfo('[MEMBER] - [/GET] HTTP Request :: getOne method');

  try {
    response.json(await model.getOne(request.params.id));
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
  // logInfo('[MEMBER] - [/POST] HTTP Request :: create method');

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
  // logInfo('[MEMBER] - [/PUT] HTTP Request :: update method');

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
  // logInfo('[MEMBER] - [/DELETE] HTTP Request :: remove method');

  try {
    response.json(await model.remove(request.params.id));
  } catch (error) {
    // Printar erro no log e/ou console
    response.status(500).json(error);
  }
};
