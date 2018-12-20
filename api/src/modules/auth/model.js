import jwt from 'jsonwebtoken';
import { get as getUser } from '../user/model';
import bcrypt from 'bcrypt';

/**
 * @param {Object} data - User data to login
 * @param {String} data.email -
 * @param {String} data.password -
 * @returns {Object} - JWT access token
 */
export const login = async (data) => {
  const user = await getUser({ email: data.email });

  if (user.length === 0 || !(await bcrypt.compare(data.password, user[0].password))) throw new Error('Email e/ou senha inválidos!')

  return _getJWTToken(user);
};

/**
 * Generates JWT token
 *
 * @param {Object} user - User data
 * @returns {Object} Token object
 */
export const _getJWTToken = (user) => {
  try {
    const tokenParams = { id: user.id };
    const SECRET_KEY = process.env.SECRET_KEY;
    const options = { algorithm: 'HS256', expiresIn: '365d' };

    return { token: jwt.sign(tokenParams, SECRET_KEY, options) };
  } catch (e) {
    throw e;
  }
};
