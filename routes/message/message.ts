import { Router, Request, Response } from "express";

import { sendMessage } from "../services/rabbitmq";

const router = Router();

router.post('/', (req: Request, res: Response) => {
    const { msg } = req.body;
    sendMessage(msg);
    res.status(200).json('send success');
});

export default router;