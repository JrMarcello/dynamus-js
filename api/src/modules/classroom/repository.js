import schema from './schema';

/**
 *  Get all Classroom from database.
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = (params) => {
  return schema.find({ active: true }).sort({ _id: -1 });
};

/**
 * Find a Classroom by ID
 *
 * @param {Interger} id - Classroom ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getOne = (id) => {
  return schema.findById(id);
};

/**
 * Saves a Classroom in database
 *
 * @param {Object} data - Classroom data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = (data) => {
  return schema.create(data);
};

/**
 * Updates an Classroom, given an id
 *
 * @param {Object} data - Classroom data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = (data) => {
  return schema.findByIdAndUpdate(data.id, data);
};

/**
 * Remove a Classroom
 *
 * @param {Object} id - Classroom data to be removed
 * @param {Function} callback - First param: err, in case of error; Second param: records from DB
 * @returns {Function} - Returns the callback function
 */
export const remove = (id) => {
  return schema.findByIdAndRemove(id);
};