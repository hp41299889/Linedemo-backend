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
        };
        const password = body.password;
        await checkPassword(password, result.password);
        success(res, 'login success');
    } catch (err) {
        fail(res, err);
        next(err);
    };
};

const checkPassword = async (p: string, pa: string) => {
    try {
        if (p != pa) {
            throw 'password is not correct';
        };
    } catch (err) {
        throw err;
    };
};