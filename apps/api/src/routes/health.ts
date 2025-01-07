import type { FastifyInstance } from 'fastify';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';

import { HealthCheckResponse } from '@workspace/service-contracts';

const attachHandlers = (fastify: FastifyInstance) => {
  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: 'GET',
    url: '/health',
    schema: {
      description: 'Health Check Status',
      tags: ['Health'],
      response: {
        200: HealthCheckResponse,
      },
    },
    handler: async (request, reply) => {
      let healthy = true;
      let environment = 'unknown';

      try {
        // Add other health checks here
        environment = fastify.config.ENVIRONMENT_STAGE || 'unknown';
      } catch (err) {
        healthy = false;
      }

      reply.send({
        healthy,
        environment,
      });
    },
  });
};

export default attachHandlers;
