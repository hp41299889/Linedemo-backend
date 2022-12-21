import { Sequelize } from 'sequelize';

import { postgresConfig } from '../config';

const { username, password, database, host, port } = postgresConfig;

const postgres = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${database}`);

export default () => {
    connect();
};

//TODO use Rxjs observable
const connect = async () => {
    try {
        await postgres.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    };
};