import * as repository from './repository';

/**
 * Main validate
 *
 * @param {Object} data - Class data to validate
 */
const _validate = async (data) => {
  if (!data || Object.keys(data).length === 0) throw new Error('Constante de validação dos campos de Class');
};

/**
 * @param {Object} params - Params to query
 * @returns {Function} - Returns a Promisse
 */
export const getAll = (params => repository.getAll(params));

/**
 * @param {Object} id - Class ID
 * @returns {Function} - Returns a Promisse
 */
export const getOne = (id => repository.getOne(id));

/**
 * @param {Object} id - Classroom ID
 * @returns {Function} - Returns a Promisse
 */
export const getByClassroom = (id => repository.getByClassroom(id));

/**
 * @param {Object} data - Class data to be saved
 * @returns {Function} - Returns a Promisse
 */
export const create = async (data) => {
  await _validate(data);

  return repository.create(data);
};

/**
 * @param {Object} data - Class data to be updated
 * @returns {Function} - Returns a Promisse
 */
export const update = async (data) => {
  await _validate(data);

  return repository.update(data);
};

/**
 * @param {Object} id - Class ID
 * @returns {Function} - Returns a Promisse
 */
export const remove = (id => repository.remove(id));
