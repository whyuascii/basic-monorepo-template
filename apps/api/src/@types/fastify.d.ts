import { Span } from '@opentelemetry/api';
import 'fastify';

declare module 'fastify' {
  export interface FastifyRequest {
    startTime?: [number, number];
    span?: Span;
  }
  export interface FastifyInstance {
    /**
     * The authenticated user object, attached after JWT verification.
     */

    config: {
      ENVIRONMENT_STAGE: string;
      NODE_ENV: string;
      PORT: number;
      HOST: string;
      JWT_SECRET: string;
      RATE_LIMIT_MAX: number;
      RATE_LIMIT_TIME_WINDOW: string;
      ENABLE_CSRF: boolean;
      OAUTH2_CLIENT_ID: string;
      OAUTH2_CLIENT_SECRET: string;
      OAUTH2_CALLBACK_URL: string;
    };
    /**
     * Verifies the user's JWT and attaches the user object to the request.
     */
    verifyToken(request: FastifyRequest, reply: FastifyReply): Promise<void>;

    /**
     * Generates a signed JWT token.
     * @param payload - The payload to include in the JWT.
     * @param options - Optional sign options (e.g., expiration time).
     * @returns A signed JWT string.
     */
    generateToken(
      payload: Record<string, unknown>,
      options?: {
        expiresIn?: string | number;
        audience?: string;
        issuer?: string;
      },
    ): string;

    /**
     * The Fastify OAuth2 instance for Google OAuth2.
     */
    googleOAuth2: {
      getAccessTokenFromAuthorizationCodeFlow(
        request: FastifyRequest,
      ): Promise<{ access_token: string; refresh_token?: string; id_token?: string }>;

      // Add other Google OAuth2-related methods or properties as needed
    };
  }

  export interface FastifyBaseLogger {
    /**
     * Trace ID for the current request (added via middleware).
     */
    traceId?: string;

    /**
     * Span ID for the current request (added via middleware).
     */
    spanId?: string;
  }
}
