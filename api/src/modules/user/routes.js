import express from 'express';
import * as controller from './controller';

const router = express.Router();
const API_USER_BASE_PAH = '/user';

export default () => {
  router.get(API_USER_BASE_PAH, controller.getAll);
  router.get(`${API_USER_BASE_PAH}/:id`, controller.getById);
  router.post(API_USER_BASE_PAH, controller.create);
  router.put(`${API_USER_BASE_PAH}/:id`, controller.update);
  router.delete(`${API_USER_BASE_PAH}/:id`, controller.remove);

  return router;
};