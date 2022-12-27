import { Router } from 'express';

import { createHandler, readAllHandler, readByIdHandler, updateByIdHandler, deleteByIdHandler } from '../../controllers/user/user';
import logger from '../../util/logger';

const router = Router();

router.route('/user')
  .post(createHandler);
router.route('/users')
  .get(readAllHandler);
router.route('/user/:id')
  .get(readByIdHandler)
  .patch(updateByIdHandler)
  .delete(deleteByIdHandler);

export default router;