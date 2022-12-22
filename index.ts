import express from 'express';
import cors from 'cors';

import { appConfig } from './config';
import postgres from './services/postgres';
import { connect } from './services/rabbitmq';
import * as routes from './routes/index';

const appPort = appConfig.port;
const server = express();

server.use(express.json())
server.use(cors());
server.use('/message', routes.message);
server.use('/register', routes.register);

const appInit = () => {
    postgres();
    // connect();
};

server.listen(appPort, () => {
    appInit();
    console.log(`server is running on port ${appPort}`);
})