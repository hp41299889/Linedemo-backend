import { Response } from "express";

import { loggerFactory } from "./logger";

const logger = loggerFactory('HttpHandler');

export const success = (res: Response, result: any) => {
    logger.debug('Handle http request success');
    res.status(200).json({
        status: 'success',
        data: result
    });
};
export const fail = (res: Response, error: any) => {
    logger.error('Handle http request fail');
    res.status(400).json({
        status: 'fail',
        data: error
    });
};