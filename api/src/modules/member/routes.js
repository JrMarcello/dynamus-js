import express from 'express';
import * as controller from './controller';

const router = express.Router();
const API_MEMBER_BASE_PAH = '/members';

export default () => {
  router.get(API_MEMBER_BASE_PAH, controller.getAll);
  router.get(`${API_MEMBER_BASE_PAH}/:id`, controller.getOne);
  router.post(API_MEMBER_BASE_PAH, controller.create);
  router.put(`${API_MEMBER_BASE_PAH}/:id`, controller.update);
  router.delete(`${API_MEMBER_BASE_PAH}/:id`, controller.remove);

  return router;
};
