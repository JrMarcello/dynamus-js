/*
  Module dependencies
 */
import jwt from 'jsonwebtoken';
// import crypto from 'crypto';
// import { compare, encrypt } from '../../common/crypto';
// import config from '../../../config/config';

/**
 * @param {Object} data - User data to login
 * @param {String} data.email -
 * @param {String} data.password -
 * @returns {Object} - JWT access token
 */
export const login = async (data) => {
  // bcrypt.compare(plainText, hashPassword)
  console.log(data);
  const user = {}; //GET USER BY EMAIL AND PASSWORD
  user.id = 1;
  // user.email = 'mail@mail.com';
  // user.profile = 1;

  if (!user) throw new Error('Email e/ou senha inválidos!')

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
