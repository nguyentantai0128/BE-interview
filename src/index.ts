/* eslint-disable prettier/prettier */
import { Server } from 'http';
import configEnv from '@config/env';
import app from './app';
import db from './config/database';

const server: Server = app.listen(configEnv.port, () => {
  console.log(`Listening to port ${configEnv.port}`);
});

const exitHandler = () => {
  if (server) {
    server.close(async () => {
      await db.$disconnect();
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: Error) => {
  console.log(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', async () => {
  if (server) {
    await db.$disconnect();
    server.close();
  }
});
