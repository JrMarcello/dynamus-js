import express from 'express';
import * as controller from './controller';

const router = express.Router();
const API_AUTH_BASE_PAH = '/auth';

export default () => {
  router.post(`${API_AUTH_BASE_PAH}/login`, controller.login);

  return router;
};