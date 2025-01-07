import fastifySwagger from '@fastify/swagger';
import type { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { jsonSchemaTransform } from 'fastify-type-provider-zod';

export default fastifyPlugin(
  async (fastify: FastifyInstance) => {
    await fastify.register(fastifySwagger, {
      openapi: {
        info: {
          title: 'Internal API',
          description: 'Internal API',
          version: '0.1.0',
          contact: {
            name: 'Template',
            url: 'https://www.template.com/contact',
            email: 'info@template.com',
          },
        },
        servers: [
          {
            url: 'https://api.template.com/',
            description: 'Production server',
          },
          {
            url: 'http://localhost:3000',
            description: 'Local server',
          },
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
      transform: jsonSchemaTransform,
    });
  },
  { dependencies: ['config'] },
);
