import { createLogger, format, level, transports } from 'winston';

const { printf, timestamp, combine, label, colorize, metadata } = format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  if (typeof (message) == 'object') {
    message = JSON.stringify(message, null, 3);
  };
  return `${timestamp} [${label}] ${level}: ${message}`;
});

export default createLogger({
  level: 'debug',
  format: combine(
    colorize(),
    label({}),
    timestamp(),
    metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
    myFormat
  ),
  transports: [new transports.Console()],
});
