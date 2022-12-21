import express from 'express';

import { appConfig } from './config';
import { connect }  from './services/postgres';

const appPort = appConfig.port;
const server = express();

const init = () => {
    connect();
};

server.listen(appPort,() => {
    init();
    console.log(`server is running on port ${appPort}`);
})