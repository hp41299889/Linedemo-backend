import amqp, { Connection, Channel } from 'amqplib';

import { rabbitmqConfig } from '../config';

const { username, password, host, port, queueName } = rabbitmqConfig;
const uri: string = `amqp://${username}:${password}@${host}:${port}`;
const msg = 'hello rmq';

export default () => {
    connect();
};

//TODO use Rxjs observable
const connect = async (): Promise<void> => {
    await amqp.connect(uri)
        .then(async (connection: Connection) => {
            console.info('rabbitmq connect success');
            const channel = await createChannel(connection);
            channel.sendToQueue(queueName, Buffer.from(msg));
            console.debug(`send to ${queueName}, message: ${msg}`);
        }).catch(err => {
            console.error('rabbitmq connect fail', err);
        });
};

const createChannel = async (connection: Connection): Promise<Channel> => {
    const channel: Channel = await connection.createChannel()
        .then(channel => {
            console.info('create channel success');
            return channel;
        }).catch(err => {
            console.error('create channel fail');
            return err;
        });

    channel.assertQueue(queueName, {
        durable: false
    });

    return channel;
};