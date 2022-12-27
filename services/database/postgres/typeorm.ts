import { DataSource } from 'typeorm';

import { User } from '../../../entities/user';
import { postgresConfig } from '../../../config';
import { loggerFactory } from '../../../util/logger';

const logger = loggerFactory('Typeorm');
const { username, password, host, port, database } = postgresConfig;

export const Postgres = new DataSource({
  type: 'postgres',
  host: host,
  port: +port,
  username: username,
  password: password,
  database: database,
  synchronize: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});

export const postgresInit = async () => {
  try {
    await Postgres.initialize()
      .then(() => {
        logger.debug('postgres connect success');
      })
      .catch((err) => {
        logger.debug('postgres connect fail');
        throw err;
      });
  } catch (err) {
    throw err;
  }
};
