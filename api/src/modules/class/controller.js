import * as model from './model';

/**
* @param {Object} request - HTTP request
* @param {Object} response - HTTP response
* @returns {Object} HTTP response with status code and data
*/
export const getAll = async (request, response) => {
  // logInfo('[CLASS] - [/GET] HTTP Request :: getAll method');

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
export const getById = async (request, response) => {
  // logInfo('[CLASS] - [/GET] HTTP Request :: getById method');

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
export const getByClassroom = async (request, response) => {
  // logInfo('[CLASS] - [/GET] HTTP Request :: getByClassroom method');

  try {
    response.json(await model.getByClassroom(request.params.id));
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
  // logInfo('[CLASS] - [/POST] HTTP Request :: create method');

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
  // logInfo('[CLASS] - [/PUT] HTTP Request :: update method');

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
  // logInfo('[CLASS] - [/DELETE] HTTP Request :: remove method');

  try {
    response.json(await model.remove(request.params.id));
  } catch (error) {
    // Printar erro no log e/ou console
    response.status(500).json(error);
  }
};
