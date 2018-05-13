import schema from './schema';

/**
 *  Get all Class from database.
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = (params) => {
  return schema.find({ active: true }).sort({ _id: -1 });
};

/**
 * Find a Class by ID
 *
 * @param {Interger} id - Class ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getOne = (id) => {
  return schema.findById(id);
};

/**
 * Find Classes by Classroom ID
 *
 * @param {Interger} id - Classroom ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByClassroom = (id) => {
  return schema.find({ classroom_id: id, active: true }).sort({ _id: -1 });
};

/**
 * Saves a Class in database
 *
 * @param {Object} data - Class data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = (data) => {
  return schema.create(data);
};

/**
 * Updates an Class, given an id
 *
 * @param {Object} data - Class data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = (data) => {
  return schema.findByIdAndUpdate(data.id, data);
};

/**
 * Remove a Class
 *
 * @param {Object} id - Class data to be removed
 * @param {Function} callback - First param: err, in case of error; Second param: records from DB
 * @returns {Function} - Returns the callback function
 */
export const remove = (id) => {
  return schema.findByIdAndRemove(id);
};