import express from 'express';
import cors from 'cors';

import { appConfig } from './config';
import postgres from './services/postgres';
import rabbitmq from './services/rabbitmq';
import message from './controllers/message';

const appPort = appConfig.port;
const server = express();

server.use(express.json())
server.use(cors());
server.use('/message', message);

const appInit = () => {
    postgres();
    rabbitmq();
};

server.listen(appPort, () => {
    appInit();
    console.log(`server is running on port ${appPort}`);
})