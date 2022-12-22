import 'dotenv/config';

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

export const rabbitmqProducerConfig = {
    username: process.env.RABBITMQ_PRODUCER_USERNAME,
    password: process.env.RABBITMQ_PRODUCER_PASSWORD,
    host: process.env.RABBITMQ_PRODUCER_HOST,
    port: process.env.RABBITMQ_PRODUCER_PORT,
    queueName: process.env.RABBITMQ_PRODUCER_QUEUENAME || "node"
};

export const rabbitmqConsumerConfig = {
    username: process.env.RABBITMQ_CONSUMER_USERNAME,
    password: process.env.RABBITMQ_CONSUMER_PASSWORD,
    host: process.env.RABBITMQ_CONSUMER_HOST,
    port: process.env.RABBITMQ_CONSUMER_PORT,
    queueName: process.env.RABBITMQ_CONSUMER_QUEUENAME || "node"
};