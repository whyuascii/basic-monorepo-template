import fastifyJWT from '@fastify/jwt';
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

export default fastifyPlugin(
  async (fastify: FastifyInstance) => {
    const secret = fastify.config.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET is not defined. Please set it in your configuration.');
    }

    // Register the JWT plugin
    await fastify.register(fastifyJWT, {
      secret,
      cookie: {
        cookieName: 'auth_token', // The cookie where the JWT will be stored
        signed: true, // Ensures the cookie is signed
      },
      sign: {
        expiresIn: '1h', // Token expiration time
      },
    });

    // Add utility functions to the Fastify instance for convenience
    fastify.decorate('generateToken', (payload: Record<string, unknown>) => {
      return fastify.jwt.sign(payload);
    });

    fastify.decorate('verifyToken', async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
      } catch (err) {
        fastify.log.error(`JWT verification failed: ${err}`);
        throw new Error('Invalid token');
      }
    });

    // Hook to validate JWTs on protected routes
    // TODO: possibly remove for preHandler instead
    fastify.addHook('onRequest', async (request, reply) => {
      if (request.url.startsWith('/protected')) {
        try {
          await request.jwtVerify();
        } catch (err) {
          reply.status(401).send({ error: 'Unauthorized access' });
        }
      }
    });

    fastify.log.info('JWT plugin registered successfully.');
  },
  { name: 'jwt', dependencies: ['config', 'cookie'] }, // Ensure dependencies are loaded
);
