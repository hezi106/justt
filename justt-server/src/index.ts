import app from './app';

const server = app.listen(process.env.NODE_DOCKER_PORT, () => {
  console.log(`Listening to port ${process.env.NODE_DOCKER_PORT}`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.error({});
      console.log('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: any) => {
  console.error({ error });
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  if (server) {
    server.close();
  }
});
