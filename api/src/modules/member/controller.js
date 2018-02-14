import * as model from './model';

/**
* @param {Object} request - HTTP request
* @param {Object} response - HTTP response
* @returns {Object} HTTP response with status code and data
*/
export const getAll = (request, response) => {
  // logInfo('[BOX] - [/GET] HTTP Request :: getAll method');

  try {
    response.json({ data: {} });
  } catch (e) {
    response.status(500).json({ error: {} });
  }
};

/**
* @param {Object} request - HTTP request
* @param {Object} response - HTTP response
* @returns {Object} HTTP response with status code and data
*/
export const getOne = (request, response) => {
  // logInfo('[BOX] - [/GET] HTTP Request :: getOne method');

  try {
    response.json({ data: {} });
  } catch (e) {
    response.status(500).json({ error: {} });
  }
};

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const create = (request, response) => {
  // logInfo('[BOX] - [/POST] HTTP Request :: create method');

  try {
    response.json({ data: {} });
  } catch (e) {
    response.status(500).json({ error: {} });
  }
};

/**
* @param {Object} request - HTTP request
* @param {Object} response - HTTP response
* @returns {Object} HTTP response with status code and data
*/
export const update = (request, response) => {
  // logInfo('[BOX] - [/PUT] HTTP Request :: update method');

  try {
    response.json({ data: {} });
  } catch (e) {
    response.status(500).json({ error: {} });
  }
};

/**
* @param {Object} request - HTTP request
* @param {Object} response - HTTP response
* @returns {Object} HTTP response with status code and data
*/
export const remove = async (request, response) => {
  // logInfo('[BOX] - [/DELETE] HTTP Request :: remove method');

  try {
    response.json({ data: {} });
  } catch (e) {
    response.status(500).json({ error: {} });
  }
};
