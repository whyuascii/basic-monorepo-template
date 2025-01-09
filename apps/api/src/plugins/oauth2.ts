import fastifyOauth2 from '@fastify/oauth2';
import type { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

export default fastifyPlugin(
  async (fastify: FastifyInstance) => {
    const { OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET, OAUTH2_CALLBACK_URL } = fastify.config;

    if (!OAUTH2_CLIENT_ID || !OAUTH2_CLIENT_SECRET || !OAUTH2_CALLBACK_URL) {
      throw new Error('OAuth2 configuration is missing. Please check environment variables.');
    }

    fastify.register(fastifyOauth2, {
      name: 'googleOAuth2',
      scope: ['email', 'profile'],
      credentials: {
        client: {
          id: OAUTH2_CLIENT_ID,
          secret: OAUTH2_CLIENT_SECRET,
        },
        auth: fastifyOauth2.GOOGLE_CONFIGURATION,
      },
      startRedirectPath: '/auth/google',
      callbackUri: OAUTH2_CALLBACK_URL,
    });

    fastify.log.info('OAuth2 plugin registered successfully.');
  },
  { name: 'oauth2', dependencies: ['config', 'cookie'] },
);
