import schema from './schema';

/**
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async (params) => {
  return schema.find({ active: true }).sort({ name: -1 });
};

/**
 * @param {Interger} params - Params
 * @returns {Promisse} - Returns a Promisse
 */
export const get = (params) => {
  return schema.find(params).sort({ name: -1 });
};

/**
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = (id) => {
  return schema.findById(id);
};

/**
 * @param {Object} data - User data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = (data) => {
  return schema.create(data);
};

/**
 * @param {Object} data - User data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = (data) => {
  return schema.findByIdAndUpdate(data.id, data);
};

/**
 * @param {Object} id - User data to be removed
 * @param {Function} callback - First param: err, in case of error; Second param: records from DB
 * @returns {Function} - Returns the callback function
 */
export const remove = (id) => {
  return schema.findByIdAndRemove(id);
};
