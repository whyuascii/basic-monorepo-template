import type { IncomingMessage, ServerResponse } from 'node:http';

import dotenv from 'dotenv';
import type { FastifyBaseLogger, FastifyInstance, FastifyTypeProviderDefault, RawServerDefault } from 'fastify';

import { build } from './app';
import { setupTracing, shutdownTracing } from './config/tracing-config';

const start = async () => {
  let fastify: FastifyInstance<
    RawServerDefault,
    IncomingMessage,
    ServerResponse<IncomingMessage>,
    FastifyBaseLogger,
    FastifyTypeProviderDefault
  >;

  // Load environment variables
  if (process.env.NODE_ENV === 'local') {
    const localEnv = dotenv.config({ path: './.env' });
    console.log('Local environment loaded', localEnv);
  }

  // Initialize tracing
  try {
    await setupTracing();
    console.log('Tracing initialized');
  } catch (err) {
    console.error('Error initializing tracing:', err);
    process.exit(1);
  }

  // Build the Fastify app
  try {
    fastify = await build();
  } catch (err) {
    console.error('error', 'Error starting server', { error: err });
    return;
  }

  const PORT = fastify.config?.PORT || process.env.PORT || 3000;
  const HOST = fastify.config?.HOST || '0.0.0.0';

  // Start the server
  try {
    await fastify.listen({ host: HOST, port: Number(PORT) });
    fastify.log.info(`Server listening on http://${HOST}:${PORT}`);
  } catch (err) {
    fastify.log.error('Error starting server:', err);
    process.exit(1);
  }

  // Graceful shutdown
  const shutdown = async (signal: string) => {
    fastify.log.info(`Received ${signal}. Closing server...`);
    try {
      await fastify.close();
      await shutdownTracing();
      fastify.log.info('Server gracefully stopped');
    } catch (err) {
      fastify.log.error('Error during server shutdown:', err);
      process.exit(1);
    }
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
};

start();
