import { Connection, Channel } from 'amqplib';

import { rabbitmqProducerConfig } from '../../config/index';
import {
    connect,
    createChannel,
    assertExchange,
} from './rabbitmq';

//using publish/subscribe
//publish mode won't use queueName
//TODO use Rxjs observable
const { username, password, host, port, queueName } = rabbitmqProducerConfig;
const uri: string = `amqp://${username}:${password}@${host}:${port}`;
const exchange = 'node';

let channel: Channel;

export const producerInit = async (): Promise<void> => {
    try {
        const connection: Connection = await connect(uri);
        channel = await createChannel(connection);
        await assertExchange(channel, exchange);
    } catch (err) {
        throw err;
    };
};

export const publishMessage = (message: string): void => {
    try {
        channel.publish(exchange, '', Buffer.from(message));
        console.log('send message: ', message);
    } catch (err) {
        console.error('publishMessage error');
        throw err;
    };
};