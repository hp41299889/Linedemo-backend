import { Router, Request, Response } from "express";

import { PostRegisterBody } from "./interface";

const router = Router();

router.post('/', (req: Request, res: Response) => {
    const { body } = req;
});

export default router;