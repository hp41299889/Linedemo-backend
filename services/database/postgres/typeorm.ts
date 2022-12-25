import { DataSource } from 'typeorm';
import { User } from '../../../entities/user';

export const Postgres = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'node',
  password: 'node',
  database: 'nodedemo',
  synchronize: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});

export const postgresInit = async () => {
  try {
    await Postgres.initialize()
      .then(() => {
        console.log('typeorm postgres connect success');
      })
      .catch((err) => {
        console.log('typeorm postgres connect fail');
        throw err;
      });
  } catch (err) {
    throw err;
  }
};
