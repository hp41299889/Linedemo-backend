import { Request, Response, NextFunction } from "express";

import logger from "../../util/logger";
import { create, readAll, readById, updateById, deleteById } from "../../models/user";


//TODO more easily
//TODO use Rxjs
//TODO params
export const createHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                result
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: {
                err
            }
        });
        next(err);
    };
};

export const readAllHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await readAll();
        res.status(201).json({
            status: 'success',
            data: {
                result
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: {
                err
            }
        });
        next(err);
    };
};

export const readByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await readById(req.params.id);
        res.status(201).json({
            status: 'success',
            data: {
                result
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: {
                err
            }
        });
        next(err);
    };
};

export const updateByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await updateById(req.params.id, req.body);
        res.status(201).json({
            status: 'success',
            data: {
                result
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: {
                err
            }
        });
        next(err);
    };
};

export const deleteByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await deleteById(req.params.id);
        res.status(201).json({
            status: 'success',
            data: {
                result
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: {
                err
            }
        });
        next(err);
    };
};