import schema from './schema';

/**
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async (params) => {
  return schema.find({ active: true }).sort({ _id: -1 });
};

/**
 * @param {Interger} id - Class ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = (id) => {
  return schema.findById(id);
};

/**
 * @param {Interger} id - Classroom ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByClassroom = (id) => {
  return schema.find({ classroom_id: id, active: true }).sort({ name: -1 });
};

/**
 * @param {Object} data - Class data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = (data) => {
  return schema.create(data);
};

/**
 * @param {Object} data - Class data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = (data) => {
  return schema.findByIdAndUpdate(data.id, data);
};

/**
 * @param {Object} id - Class data to be removed
 * @param {Function} callback - First param: err, in case of error; Second param: records from DB
 * @returns {Function} - Returns the callback function
 */
export const remove = (id) => {
  return schema.findByIdAndRemove(id);
};
