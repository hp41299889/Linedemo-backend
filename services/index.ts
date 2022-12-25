import { postgresInit } from './database/postgres/typeorm';
import { producerInit } from './rabbitmq/producer';
import { consumerInit } from './rabbitmq/consumer';

export { postgresInit, producerInit, consumerInit };
