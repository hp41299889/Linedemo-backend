import amqp, { Connection, Channel } from 'amqplib';

import { rabbitmqConfig } from '../config';

const { username, password, host, port, queueName } = rabbitmqConfig;
const uri: string = `amqp://${username}:${password}@${host}:${port}`;
const msg = 'hello rmq';

let channel: Channel;

// export default () => {
//     connect();
// };

//TODO use Rxjs observable
const connect = async (): Promise<void> => {
    await amqp.connect(uri)
        .then(async (connection: Connection) => {
            console.info('rabbitmq connect success');
            await createChannel(connection);
            // channel.sendToQueue(queueName, Buffer.from(msg));
            // console.debug(`send to ${queueName}, message: ${msg}`);
        }).catch(err => {
            console.error('rabbitmq connect fail', err);
        });
};

const createChannel = async (connection: Connection): Promise<void> => {
    const chan: Channel = await connection.createChannel()
        .then(channel => {
            console.info('create channel success');
            return channel;
        }).catch(err => {
            console.error('create channel fail');
            return err;
        });

    chan.assertQueue(queueName, {
        durable: false
    });
    channel = chan;
};

const sendMessage = (message: string) => {
    const msg = Buffer.from(message);
    channel.sendToQueue(queueName, msg);
    console.info(`send to ${queueName}, message:${msg}`)
};

export default connect;