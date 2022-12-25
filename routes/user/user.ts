import { Router, Request, Response } from 'express';

import { PostUserBody } from './interface';
import { CreateUser } from '../../controllers/user/interface';
import { create, deleteById, readAll, readById, updateById } from '../../controllers/user/user';
import logger from '../../util/logger';

const router = Router();

//TODO more easily
//TODO use Rxjs
router.post('/user', async (req: Request, res: Response, next: any) => {
  try {
    const body: CreateUser = req.body;
    const result = await create(body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
    next(err);
  };
});

router.get('/users', async (req: Request, res: Response, next: any) => {
  try {
    const result = await readAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
    next(err);
  };
});

router.route('/user/:id')
  .get(async (req: Request, res: Response, next: any) => {
    try {
      const { id } = req.params;
      const result = await readById(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json(err);
      next(err);
    };
  })
  .patch(async (req: Request, res: Response, next: any) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = await updateById(id, body);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json(err);
      next(err);
    };
  })
  .delete(async (req: Request, res: Response, next: any) => {
    try {
      const { id } = req.params;
      const result = await deleteById(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json(err);
      next(err);
    };
  });

export default router;