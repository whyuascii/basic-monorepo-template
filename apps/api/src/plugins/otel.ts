import { context, Span, trace } from '@opentelemetry/api';
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import { tracer } from '../config/tracing-config';

/**
 * Adds trace and span IDs to logs and response headers.
 */
const setTraceContext = (request: FastifyRequest, reply: FastifyReply) => {
  const span = trace.getSpan(context.active());
  const spanContext = span ? span.spanContext() : { traceId: 'unknown-trace-id', spanId: 'unknown-span-id' };

  // Enrich logger with trace and span IDs
  request.log = request.log.child({
    traceId: spanContext.traceId,
    spanId: spanContext.spanId,
  });

  // Add trace IDs to response headers
  reply.header('x-trace-id', spanContext.traceId);
  reply.header('x-span-id', spanContext.spanId);
};

/**
 * Starts a new span for the request lifecycle.
 */
const startRequestSpan = (request: FastifyRequest): Span => {
  const span = tracer.startSpan(`HTTP ${request.method} ${request.url}`, {
    attributes: {
      'http.method': request.method,
      'http.url': request.url,
      'http.route': request.routeOptions?.url || 'unknown', // Use routeOptions for the route path
    },
  });

  request.span = span; // Attach the span to the request
  return span;
};

/**
 * Ends the span, adding final attributes like HTTP status and latency.
 */
const endRequestSpan = (request: FastifyRequest, reply: FastifyReply) => {
  const { span } = request;
  if (span) {
    span.setAttribute('http.status_code', reply.statusCode);
    span.setAttribute('http.origin', request.headers.origin || 'unknown');
    span.setAttribute('http.hostname', request.hostname || 'unknown');
    span.end();
  }
};

/**
 * OpenTelemetry Plugin
 * Captures and propagates tracing information for all requests.
 */
export default fastifyPlugin(
  async (fastify: FastifyInstance) => {
    // Hook: Enrich context and start span for each request
    fastify.addHook('onRequest', async (request, reply) => {
      setTraceContext(request, reply);
      const span = startRequestSpan(request);

      // Update logger with span context
      const spanContext = span.spanContext();
      request.log = request.log.child({
        traceId: spanContext.traceId,
        spanId: spanContext.spanId,
      });

      reply.header('x-trace-id', spanContext.traceId);
      reply.header('x-span-id', spanContext.spanId);
    });

    // Hook: End the span after the response is sent
    fastify.addHook('onResponse', async (request, reply) => {
      endRequestSpan(request, reply);
    });

    // Hook: Record exceptions and set span status on errors
    fastify.addHook('onError', async (request, reply, error) => {
      const { span } = request;
      if (span) {
        span.recordException(error);
        span.setStatus({ code: 2, message: error.message }); // 2 = ERROR
        span.setAttribute('http.origin', request.headers.origin || 'unknown');
        span.setAttribute('http.hostname', request.hostname || 'unknown');
        span.end();
      }
    });
  },
  { name: 'open-telemetry', dependencies: [] },
);
