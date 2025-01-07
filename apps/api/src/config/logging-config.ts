import { context, trace } from '@opentelemetry/api';
import type { FastifyRequest } from 'fastify';
import type { LoggerOptions } from 'pino';
import pino from 'pino';

/**
 *
 * Fastify Logger Configuration
 *
 * @see https://github.com/pinojs/pino-pretty
 * @see https://fastify.dev/docs/latest/Reference/Logging/#log-redaction
 */

export const getLoggerConfig = (): LoggerOptions => {
  const baseConfig = {
    level: 'debug',
    serializers: {
      req: (req: FastifyRequest) => {
        const span = trace.getSpan(context.active());
        const spanContext = span ? span.spanContext() : { traceId: 'unknown-trace-id', spanId: 'unknown-span-id' };

        return {
          method: req.method,
          url: req.url,
          headers: req.headers,
          remoteAddress: req.ip,
          traceId: spanContext.traceId,
          spanId: spanContext.spanId,
        };
      },
      reply: pino.stdSerializers.res,
      err: pino.stdSerializers.err,
    },
  };

  const prodConfig = { ...baseConfig };
  prodConfig.level = 'info';

  switch (process.env.NODE_ENV) {
    case 'production':
      return { ...baseConfig, level: 'info' };
    case 'test':
      return { ...baseConfig, level: 'silent' };
    default:
      return {
        ...baseConfig,
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: true,
            ignore: 'pid,hostname',
          },
        },
      };
  }
};
