import { Request, Response, NextFunction } from "express";

import { loggerFactory } from "../../util/logger";
import { success, fail } from '../../util/httpHandler';

import {
    createUser,
    readAllUsers,
    readUserById,
    updateUserById,
    deleteUserById
} from "../../models/user";

const logger = loggerFactory('UserController');
//TODO more easily
//TODO use Rxjs
//TODO params
export const postUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        logger.debug('Get http request, post an user');
        const result = await createUser(req.body);
        success(res, result);
    } catch (err) {
        fail(res, err);
        next(err);
    };
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.debug('Get http request, get all users', { label: 'user' });
        const result = await readAllUsers();
        success(res, result);
    } catch (err) {
        fail(res, err);
        next(err);
    };
};

export const getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        logger.debug('Get http request, get an user');
        const result = await readUserById(+req.params.id);
        success(res, result);
    } catch (err) {
        fail(res, err);
        next(err);
    };
};

export const patchUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        logger.debug('Get http request, patch an user');
        const result = await updateUserById(+req.params.id, req.body);
        success(res, result);
    } catch (err) {
        fail(res, err);
        next(err);
    };
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        logger.debug('Get http request, delete an user');
        const result = await deleteUserById(+req.params.id);
        success(res, result);
    } catch (err) {
        fail(res, err);
        next(err);
    };
};