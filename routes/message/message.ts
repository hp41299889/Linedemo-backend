import { Router, Request, Response } from 'express';

import { publishMessage } from '../../services/rabbitmq/producer';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  const { msg } = req.body;
  publishMessage(msg);
  res.status(200).json('send success');
});

export default router;
