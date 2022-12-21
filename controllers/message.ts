import { Router, Request, Response } from "express";

import sendMessage from "../services/rabbitmq";

const message = Router();

message.post('/', (req: Request, res: Response) => {
    const { msg } = req.body;
    sendMessage(msg);
    res.status(200).json('send success');
});

export default message;