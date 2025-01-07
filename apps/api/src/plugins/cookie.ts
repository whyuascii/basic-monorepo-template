import fastifyCookie from '@fastify/cookie';
import type { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

export default fastifyPlugin(
  async (fastify: FastifyInstance) => {
    // Fetch the JWT secret from configuration or environment variables
    const secret = fastify.config.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET is not defined. Ensure it is set in your environment or configuration.');
    }

    // Register the cookie plugin with secure options
    await fastify.register(fastifyCookie, {
      secret, // Secret for signing cookies
      parseOptions: {
        httpOnly: true, // Prevents JavaScript access
        secure: process.env.NODE_ENV !== 'development', // Only send cookies over HTTPS in production
        sameSite: 'lax', // Helps prevent CSRF while allowing safe cross-origin usage
      },
    });
  },
  { name: 'cookie', dependencies: ['config'] },
);
