import type { FastifyInstance, FastifyRequest } from 'fastify';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';

const authHandlers = (fastify: FastifyInstance, opts: { version: string; rootPath: string }) => {
  const { version, rootPath } = opts;
  const basePath = `/${version}/${rootPath}`;

  const dashboardPreHandler = [
    fastify.verifyToken,
    async (request: FastifyRequest) => {
      const user = request.user; // Assuming `verifyToken` attaches `user` to the request
      if (!user) {
        throw fastify.httpErrors.unauthorized('Unauthorized access');
      }
    },
  ];

  // POST /register
  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/register',
    schema: {
      body: z.object({
        email: z.string().email(),
        password: z.string().min(6),
      }),
      response: {
        201: z.object({ message: z.string() }),
      },
    },
    handler: async (request, reply) => {
      // service call

      return reply.status(201).send({ message: 'User registered successfully.' });
    },
  });

  // POST /login
  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/login',
    schema: {
      body: z.object({
        email: z.string().email(),
        password: z.string(),
      }),
      response: {
        200: z.object({ token: z.string() }),
      },
    },
    handler: async (request, reply) => {
      const { email } = request.body;

      // service call
      // if (!isValid) {
      //   throw fastify.httpErrors.unauthorized('Invalid email or password');
      // }

      // Generate JWT token
      const token = fastify.generateToken({ email });
      return reply.send({ token });
    },
  });

  // GET /dashboard
  fastify.route({
    method: 'GET',
    url: `${basePath}/dashboard`,
    schema: {
      response: {
        200: z.object({ data: z.string() }),
      },
    },
    preHandler: dashboardPreHandler,
    handler: async (request, reply) => {
      const user = request.user; // Assuming `verifyToken` attaches `user` to request

      //service call

      return reply.send({
        data: `Welcome to your dashboard, ${user.email}!`,
      });
    },
  });

  // GET /auth/callback for OAuth2
  fastify.get('/auth/callback', async (request, reply) => {
    const token = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
    reply.send({ token });
  });
};

export default authHandlers;
