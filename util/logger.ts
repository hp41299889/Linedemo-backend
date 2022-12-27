import { createLogger, format, transports } from 'winston';

const { printf, timestamp, combine, label, colorize, metadata } = format;

export const loggerFactory = (customLabel: string) => {
  const formatter = printf(({ level, message, label, timestamp }) => {
    if (typeof (message) == 'object') {
      message = JSON.stringify(message, null, 3);
    };
    return `${timestamp} [${label}] ${level}: ${message}`;
  });
  const logger = createLogger({
    level: 'debug',
    format: combine(
      colorize(),
      label({ label: customLabel }),
      timestamp(),
      metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
      formatter
    ),
    transports: [new transports.Console()],
  })
  return logger;
};