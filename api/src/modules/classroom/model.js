import * as repository from './repository';

/**
 * Main validate
 *
 * @param {Object} data - Classroom data to validate
 */
const _validate = async (data) => {
  if (!data || Object.keys(data).length === 0) throw new Error('Constante de validação dos campos de Classroom');
};

/**
 * @param {Object} params - Params to query
 * @returns {Function} - Returns a Promisse
 */
export const getAll = (params => repository.getAll(params));

/**
 * @param {Object} id - Classroom ID
 * @returns {Function} - Returns a Promisse
 */
export const getOne = (id => repository.getOne(id));

/**
 * @param {Object} classroom - Classroom data to be saved
 * @returns {Function} - Returns a Promisse
 */
export const create = async (classroom) => {
  await _validate(classroom);

  return repository.create(classroom);
};

/**
 * @param {Object} classroom - Classroom data to be updated
 * @returns {Function} - Returns a Promisse
 */
export const update = async (classroom) => {
  await _validate(classroom);

  return repository.update(classroom);
};

/**
 * @param {Object} id - Classroom ID
 * @returns {Function} - Returns a Promisse
 */
export const remove = (id => repository.remove(id));
