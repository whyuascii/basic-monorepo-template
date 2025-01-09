import fastifyEnv from '@fastify/env';
import type { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

export default fastifyPlugin(
  (fastify: FastifyInstance, _options: FastifyPluginOptions, done: (err?: Error | undefined) => void) => {
    const envSchema = {
      type: 'object',
      required: ['OAUTH2_CLIENT_ID', 'OAUTH2_CLIENT_SECRET', 'OAUTH2_CALLBACK_URL'],
      properties: {
        ENVIRONMENT_STAGE: { type: 'string', default: 'production' },
        HOST: { type: 'string', default: '0.0.0.0' },
        NODE_ENV: { type: 'string', default: 'production' },
        PORT: { type: 'number', default: 3030 },
        JWT_SECRET: { type: 'string' },
        RATE_LIMIT_MAX: { type: 'number', default: 100 },
        RATE_LIMIT_TIME_WINDOW: { type: 'string', default: '1 minute' },
        ENABLE_CSRF: { type: 'boolean', default: false },
        OAUTH2_CLIENT_ID: { type: 'string' },
        OAUTH2_CLIENT_SECRET: { type: 'string' },
        OAUTH2_CALLBACK_URL: { type: 'string' },
      },
    };

    const configOptions = {
      // decorate the Fastify server instance with `config` key
      // such as `fastify.config('PORT')
      confKey: 'config',
      schema: envSchema,
      data: process.env,
      dotenv: !!(process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test'),
      // will remove the additional properties
      // from the data object which creates an
      // explicit schema
      removeAdditional: true,
    };

    fastifyEnv(fastify, configOptions, done);
  },
  { name: 'config' },
);
