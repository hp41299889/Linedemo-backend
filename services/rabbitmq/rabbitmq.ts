import amqp, { Connection, Channel, Replies } from 'amqplib';

//using publish/subscribe
//publish mode won't use queueName
//TODO use Rxjs observable
export const connect = async (uri: string): Promise<Connection> => {
  try {
    const connection = await amqp.connect(uri)
      .then((connection: Connection) => connection)
      .catch((err) => {
        throw err;
      });
    return connection;
  } catch (err) {
    throw err;
  }
};

export const createChannel = async (connection: Connection): Promise<Channel> => {
  try {
    const channel = await connection.createChannel()
      .then((channel: Channel) => channel)
      .catch((err) => {
        throw err;
      });
    return channel;
  } catch (err) {
    throw err;
  }
};

export const assertExchange = async (channel: Channel, exchange: string): Promise<void> => {
  try {
    await channel.assertExchange(exchange, 'fanout', {
      durable: false,
    });
  } catch (err) {
    throw err;
  }
};

export const assertQueue = async (channel: Channel): Promise<Replies.AssertQueue> => {
  try {
    const queue = await channel.assertQueue('', {
      exclusive: true,
    });
    return queue;
  } catch (err) {
    throw err;
  }
};

export const bindQueue = async (channel: Channel, queue: Replies.AssertQueue, exchange: string): Promise<void> => {
  try {
    await channel.bindQueue(queue.queue, exchange, '');
  } catch (err) {
    throw err;
  }
};
