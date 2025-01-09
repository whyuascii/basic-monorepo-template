import { context, trace } from '@opentelemetry/api';
import type { FastifyReply, FastifyRequest } from 'fastify';

export const setTraceContext = (request: FastifyRequest, reply: FastifyReply) => {
  const span = trace.getSpan(context.active());
  const spanContext = span ? span.spanContext() : { traceId: 'unknown-trace-id', spanId: 'unknown-span-id' };

  // Add trace and span IDs to logs
  request.log = request.log.child({
    traceId: spanContext.traceId,
    spanId: spanContext.spanId,
  });

  // Optionally, add trace IDs to response headers
  reply.header('x-trace-id', spanContext.traceId);
  reply.header('x-span-id', spanContext.spanId);
};
