import express from 'express';
import cors from 'cors';

import { loggerFactory } from './util/logger';
import { appConfig } from './config';
import * as services from './services/index';
import * as routes from './routes/index';

const appPort = appConfig.port;
const server = express();
const logger = loggerFactory('Server');

server.use(express.json())
server.use(cors());
server.use('/message', routes.message);
server.use(routes.user);

const appInit = () => {
  services.postgresInit();
  // services.consumerInit();
  // services.producerInit();
};

server.listen(appPort, () => {
  appInit();
  logger.info(`server is running on port ${appPort}`);
});