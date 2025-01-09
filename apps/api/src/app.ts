import fastifyAuth from '@fastify/auth';
import fastifyHelmet from '@fastify/helmet';
import Fastify, { type FastifyError, type FastifyReply, type FastifyRequest } from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { getLoggerConfig } from './config/logging-config';
import plugins from './plugins';
import attachRoutes from './routes';
import { globalErrorHandler } from './utils/error-handling';

export const build = async () => {
  const fastify = Fastify({
    logger: getLoggerConfig(),
    pluginTimeout: 10000,
  });

  // Add schema validator and serializer
  fastify.setValidatorCompiler(validatorCompiler);
  fastify.setSerializerCompiler(serializerCompiler);

  /**
   * Register authentication utilities
   *
   * Does not provide an authentication strategy, but acts as a utility for handling authentication hooks.
   * @see https://github.com/fastify/fastify-auth
   */
  await fastify.register(fastifyAuth);

  /**
   * Add security headers using Helmet
   *
   * Provides secure headers for responses, including CSP.
   * @see https://github.com/fastify/fastify-helmet
   */
  await fastify.register(fastifyHelmet, {
    global: true,
  });

  /**
   * Register other plugins
   *
   * The `plugins` file modularizes the setup of other critical plugins (e.g., CORS, cookie, rate-limiting).
   */
  await fastify.register(plugins);

  // Set a global error handler for unified error processing
  fastify.setErrorHandler(async (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    // Any HTTP error will be filtered we want to ensure we are consistent with the status code
    const { statusCode, message } = globalErrorHandler(fastify, error, request);

    // Now lets forward the error to the client
    reply.status(statusCode).send(message);
  });

  // Add a hook for cleaning up resources when the server shuts down
  fastify.addHook('onClose', (instance, done) => {
    fastify.log.info('Closing Fastify instance');
    done();
  });

  // Attach routes after plugins are registered
  fastify.after(() => {
    attachRoutes(fastify);
  });

  return fastify;
};
