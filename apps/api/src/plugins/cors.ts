import fastifyCors from '@fastify/cors';
import type { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import { selectAllowedCORS } from '../utils/select-cors';

export default fastifyPlugin(
  async (fastify: FastifyInstance) => {
    const allowedOrigins = selectAllowedCORS(fastify.config.ENVIRONMENT_STAGE);

    await fastify.register(fastifyCors, {
      origin: (origin, cb) => {
        fastify.log.info(`Incoming origin: ${origin}`);
        fastify.log.info(`Allowed origins: ${allowedOrigins}`);

        if (!origin || allowedOrigins.includes(origin)) {
          cb(null, true); // Allow the request
        } else {
          cb(new Error('Not allowed by CORS'), false); // Reject the request
        }
      },
      allowedHeaders: ['Content-Type', 'Authorization', 'Set-Cookie', 'X-CSRFToken'],
      credentials: true,
    });
  },
  { name: 'cors', dependencies: ['config'] },
);
