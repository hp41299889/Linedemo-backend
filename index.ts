import express from 'express';
import cors from 'cors';

import logger from './util/logger';
import { appConfig } from './config';
import * as services from './services/index';
import * as routes from './routes/index';

const appPort = appConfig.port;
const server = express();

server.use(express.json())
server.use(cors());
server.use('/message', routes.message);
server.use('/', routes.user);
// server.use('/register', routes.register);

const appInit = () => {
  services.postgresInit();
  // services.consumerInit();
  // services.producerInit();
};

server.listen(appPort, () => {
  appInit();
  logger.debug(`server is running on port ${appPort}`);
});