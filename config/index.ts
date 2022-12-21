import * as dotenv from 'dotenv';
dotenv.config();

import { PostgresConfig } from './interface';

export const appConfig = {
    port: process.env.APP_PORT
};

export const postgresConfig = {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
};