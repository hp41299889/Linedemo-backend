import { postgresInit } from "./postgres";
import { producerInit } from "./rabbitmq/producer";
import { consumerInit } from "./rabbitmq/consumer";

export {
    postgresInit,
    producerInit,
    consumerInit
};