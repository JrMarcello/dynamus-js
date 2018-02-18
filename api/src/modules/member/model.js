import * as repository from './repository';

/**
 * Main validate
 *
 * @param {Object} data - Member data to validate
 */
const _validate = async (data) => {
  if (!data || Object.keys(data).length === 0) throw new Error('Constante de validação dos campos de Member');
};

/**
 * @param {Object} params - Params to query
 * @returns {Function} - Returns a Promisse
 */
export const getAll = (params => repository.getAll(params));

/**
 * @param {Object} id - Member ID
 * @returns {Function} - Returns a Promisse
 */
export const getOne = (id => repository.getOne(id));

/**
 * @param {Object} member - Member data to be saved
 * @returns {Function} - Returns a Promisse
 */
export const create = async (member) => {
  await _validate(member);

  return repository.create(member);
};

/**
 * @param {Object} member - Member data to be updated
 * @returns {Function} - Returns a Promisse
 */
export const update = async (member) => {
  await _validate(member);

  return repository.update(member);
};

/**
 * @param {Object} id - Member ID
 * @returns {Function} - Returns a Promisse
 */
export const remove = (id => repository.remove(id));
