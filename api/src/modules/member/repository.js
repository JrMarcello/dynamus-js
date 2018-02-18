import schema from './schema';

/**
 *  Get all Member from database.
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = (params) => {
  return schema.find({ active: true }).sort({ _id: -1 });
};

/**
 * Find a Member by ID
 *
 * @param {Interger} id - Member ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getOne = (id) => {
  return schema.findById(id);
};

/**
 * Saves a Member in database
 *
 * @param {Object} data - Member data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = (data) => {
  return schema.create(data);
};

/**
 * Updates an Member, given an id
 *
 * @param {Object} data - Member data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = (data) => {
  return schema.findByIdAndUpdate(data.id, data);
};

/**
 * Remove a Member
 *
 * @param {Object} id - Member data to be removed
 * @param {Function} callback - First param: err, in case of error; Second param: records from DB
 * @returns {Function} - Returns the callback function
 */
export const remove = (id) => {
  return schema.findByIdAndRemove(id);
};