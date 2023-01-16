import { Request, Response, NextFunction } from "express";

import { loggerFactory } from "../../util/logger";
import { success, fail } from "../../util/httpHandler";

import { createLineToken } from "../../models/lineToken";

const logger = loggerFactory('LineTokenController');

export const postLineToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.debug('createOne');
        const result = await createLineToken(req.body);
        success(res, result);
    } catch (err) {
        fail(res, err);
        next(err);
    };
};