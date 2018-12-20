import express from 'express';
import * as controller from './controller';

const router = express.Router();
const API_MEMBER_BASE_PAH = '/classes';

export default () => {
  router.get(API_MEMBER_BASE_PAH, controller.getAll);
  router.get(`${API_MEMBER_BASE_PAH}/:id`, controller.getById);
  router.get(`${API_MEMBER_BASE_PAH}/classroom/:id`, controller.getByClassroom);
  router.post(API_MEMBER_BASE_PAH, controller.create);
  router.put(`${API_MEMBER_BASE_PAH}/:id`, controller.update);
  router.delete(`${API_MEMBER_BASE_PAH}/:id`, controller.remove);

  return router;
};
