import fastifyMultipart from '@fastify/multipart';
import type { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

/**
 * This plugins adds support for filestream / multipart/form-data Content Type
 *
 * @see https://www.npmjs.com/package/@fastify/multipart
 */
export default fastifyPlugin(async (fastify: FastifyInstance) => {
  await fastify.register(fastifyMultipart);
});
