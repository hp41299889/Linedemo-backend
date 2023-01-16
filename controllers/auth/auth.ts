import { Request, Response, NextFunction } from "express";
import { SessionData } from "express-session";

import { loggerFactory } from "../../util/logger";
import { success, fail } from "../../util/httpHandler";

import { readUserByUsername } from "../../models/user";

const logger = loggerFactory('AuthContoller');

declare module 'express-session' {
    interface SessionData {
        userId: string;
    }
};

export const signin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.debug('Get http request, signin');
        const { body } = req;
        const result = await readUserByUsername(body.username);
        if (!result) {
            throw 'user not found';
        };
        const password = body.password;
        await checkPassword(password, result.password);
        req.session.userId = req.sessionID;
        logger.info(req.session);
        logger.info(req.sessionID);
        success(res, 'signin success');
    } catch (err) {
        fail(res, err);
        next(err);
    };
};

export const signout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.debug('Get http request, signout');
        //TODO maybe kill session
        req.session.destroy(() => {
            logger.info('session destroy')
        });
        logger.info(req.session);
        logger.info(req.sessionID);
        success(res, 'signout success');
    } catch (err) {
        fail(res, err);
        next(err);
    };
};

const checkPassword = async (signinPassword: string, userPassword: string) => {
    try {
        if (signinPassword != userPassword) {
            throw 'password is not correct';
        };
    } catch (err) {
        throw err;
    };
};