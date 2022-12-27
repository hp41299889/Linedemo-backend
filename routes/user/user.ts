import { Router } from 'express';

import {
  postUser,
  getUsers,
  getUser,
  patchUser,
  deleteUser
} from '../../controllers/user/user';

const router = Router();

router.route('/user')
  .post(postUser);
router.route('/users')
  .get(getUsers);
router.route('/user/:id')
  .get(getUser)
  .patch(patchUser)
  .delete(deleteUser);

export default router;