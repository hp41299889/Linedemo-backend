import { Request, Response, NextFunction } from "express";

import { loggerFactory } from "../../util/logger";
import { success, fail } from "../../util/httpHandler";

import { readUserByUsername } from "../../models/user";

const logger = loggerFactory('AuthContoller');

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.debug('Get http request, login');
        const { body } = req;
        const result = await readUserByUsername(body.username);
        if (!result) {
            throw 'user not found';
        } else {
            const password = body.password;
            if (password != result.password) {
                throw 'password is not correct';
            } else {
                success(res, result);
            };
        };
    } catch (err) {
        fail(res, err);
        next(err);
    };
};