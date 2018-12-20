import * as repository from './repository';

/**
 * Main validate
 *
 * @param {Object} data - User data to validate
 */
const _validate = async (data) => {
  if (!data || Object.keys(data).length === 0) throw new Error('Constante de validação dos campos de User');
};

/**
 * @param {Object} params - Params to query
 * @returns {Function} - Returns a Promisse
 */
export const getAll = (params => repository.getAll(params));

/**
 * @param {Object} params - params
 * @returns {Function} - Returns a Promisse
 */
export const get = (params => repository.get(params));

/**
 * @param {Object} id - User ID
 * @returns {Function} - Returns a Promisse
 */
export const getById = (id => repository.getById(id));

/**
 * @param {Object} data - data
 * @returns {Function} - Returns a Promisse
 */
export const getToLogin = (data => repository.getToLogin(data));

/**
 * @param {Object} data - User data to be saved
 * @returns {Function} - Returns a Promisse
 */
export const create = async (data) => {
  await _validate(data);

  return repository.create(data);
};

/**
 * @param {Object} data - User data to be updated
 * @returns {Function} - Returns a Promisse
 */
export const update = async (data) => {
  await _validate(data);

  return repository.update(data);
};

/**
 * @param {Object} id - User ID
 * @returns {Function} - Returns a Promisse
 */
export const remove = (id => repository.remove(id));
