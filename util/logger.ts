import { createLogger, format, transports } from 'winston';

//TODO format like [timestamp]: [level] some
export default createLogger({
    format: format.combine(
        format.timestamp(),
        format.json(),
    ),
    transports: [
        new transports.Console(),
    ],
});