import { randomBytes } from 'crypto';
import type { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

export default fastifyPlugin(
  async (fastify: FastifyInstance) => {
    if (!fastify.config.ENABLE_CSRF) {
      fastify.log.info('CSRF protection is disabled');
      return;
    }

    // Add CSRF validation for non-GET requests
    fastify.addHook('onRequest', (request, reply, done) => {
      const csrfToken = request.cookies.csrf_token;
      if (request.method !== 'GET' && csrfToken !== request.headers['x-csrftoken']) {
        reply.status(403).send({ error: 'CSRF token is missing or invalid' });
        return;
      }
      done();
    });

    // Route to generate a new CSRF token
    fastify.get('/csrf-token', async (request, reply) => {
      const csrfToken = randomBytes(32).toString('hex');
      reply.setCookie('csrf_token', csrfToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: fastify.config.NODE_ENV !== 'development',
      });
      return { csrfToken };
    });
  },
  { name: 'csrf', dependencies: ['cookie'] },
);
