import fastifyRateLimit from '@fastify/rate-limit';
import type { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

/**
 * This plugins adds support for rate limiting
 *
 * @see https://github.com/fastify/fastify-rate-limit
 */

export default fastifyPlugin(
  async (fastify: FastifyInstance) => {
    await fastify.register(fastifyRateLimit, {
      global: false,
      max: fastify.config.RATE_LIMIT_MAX, // default 1000
      timeWindow: fastify.config.RATE_LIMIT_TIME_WINDOW, // default 1000 * 60
      allowList: [], // default []
    });
  },
  { name: 'rateLimit' },
);
