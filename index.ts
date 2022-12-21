import express from 'express';

import { appConfig } from './config';
import postgres from './services/postgres';
import rabbitmq from './services/rabbitmq';

const appPort = appConfig.port;
const server = express();

const appInit = () => {
    postgres();
    rabbitmq();
};

server.listen(appPort, () => {
    appInit();
    console.log(`server is running on port ${appPort}`);
})