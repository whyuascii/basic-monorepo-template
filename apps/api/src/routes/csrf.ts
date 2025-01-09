import { randomBytes } from 'crypto';
import type { FastifyInstance } from 'fastify';

const attachHandlers = (fastify: FastifyInstance) => {
  // Route to generate a new CSRF token
  fastify.route({
    method: 'GET',
    url: '/csrf-token',
    handler: async (request, reply) => {
      const csrfToken = randomBytes(32).toString('hex');
      reply.setCookie('csrf_token', csrfToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: fastify.config.NODE_ENV !== 'development',
      });
      return { csrfToken };
    },
  });
};

export default attachHandlers;
