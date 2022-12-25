import { Connection, Channel, Replies } from 'amqplib';

import { rabbitmqConsumerConfig } from '../../config/index';

import {
  connect,
  createChannel,
  assertExchange,
  assertQueue,
  bindQueue,
} from './rabbitmq';

//using publish/subscribe
//publish mode won't use queueName
//TODO use Rxjs observable
const { username, password, host, port, queueName } = rabbitmqConsumerConfig;
const uri = `amqp://${username}:${password}@${host}:${port}`;
const exchange = 'csharp';

export const consumerInit = async (): Promise<void> => {
  try {
    const connection: Connection = await connect(uri);
    const channel: Channel = await createChannel(connection);
    await assertExchange(channel, exchange);
    const queue: Replies.AssertQueue = await assertQueue(channel);
    await bindQueue(channel, queue, exchange);
    consumeMessage(channel, queue);
  } catch (err) {
    throw err;
  }
};

const consumeMessage = (channel: Channel, queue: Replies.AssertQueue): void => {
  try {
    channel.consume(
      queue.queue,
      (message) => {
        if (message?.content) {
          const { content } = message;
          const msg = content.toString();
          console.log('receive message: ', msg);
        }
      },
      {
        noAck: true,
      }
    );
  } catch (err) {
    console.error('consumeMessage error');
    throw err;
  }
};
