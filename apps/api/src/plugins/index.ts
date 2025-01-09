import type { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import config from './config';
import cookie from './cookie';
import cors from './cors';
import csrf from './csrf';
import jwt from './jwt';
import multipart from './multipart';
import oauth2 from './oauth2';
import openTelemetry from './otel';
import rateLimit from './rate-limit';
import sensible from './sensible';
import swagger from './swagger';

export default fastifyPlugin(async (fastify: FastifyInstance) => {
  // Register OpenTelemetry first to ensure tracing is initialized
  await fastify.register(openTelemetry);

  // Register Config and Sensible plugins next to provide configuration and utilities
  await Promise.all([fastify.register(config), fastify.register(sensible)]);

  // Register Cookie plugin (required for JWT and CSRF plugins)
  await fastify.register(cookie);

  // Register CORS, CSRF, and OAuth2 plugins
  await Promise.all([fastify.register(cors), fastify.register(csrf), fastify.register(oauth2)]);

  // Register JWT plugin after Cookie and Config
  await fastify.register(jwt);

  // Register Rate Limiting and Multipart plugins
  await Promise.all([fastify.register(rateLimit), fastify.register(multipart)]);

  // Register Swagger plugin only in the local environment
  if (fastify.config.NODE_ENV === 'local') {
    await fastify.register(swagger);
  }
});
