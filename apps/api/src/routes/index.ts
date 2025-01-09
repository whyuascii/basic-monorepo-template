import type { FastifyInstance } from 'fastify';

import csrf from './csrf';
import ExampleAuth from './example-auth';
import health from './health';

export const VERSIONS = {
  V1: 'v1',
  V2: 'v2',
  V3: 'v3',
};

const attachAllHandlers = (fastify: FastifyInstance) => {
  // Attach all handlers here
  health(fastify);
  csrf(fastify);
  ExampleAuth(fastify, { version: VERSIONS.V1, rootPath: 'auth' });
};

export default attachAllHandlers;
