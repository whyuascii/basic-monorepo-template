import '@fastify/jwt';

declare module '@fastify/jwt' {
  interface FastifyJWT {
    /**
     * Define the type of the user property after JWT verification.
     */
    user: {
      id: string;
      email: string;
      companyId?: string;
      roles?: string[];
    };
  }
}
