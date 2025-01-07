import { trace } from '@opentelemetry/api';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { FastifyInstrumentation } from '@opentelemetry/instrumentation-fastify';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { PinoInstrumentation } from '@opentelemetry/instrumentation-pino';
import {
  AlwaysOnSampler,
  BatchSpanProcessor,
  ConsoleSpanExporter,
  TraceIdRatioBasedSampler,
} from '@opentelemetry/sdk-trace-base';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import pino from 'pino';

import { getLoggerConfig } from './logging-config';

const logger = pino(getLoggerConfig());

let provider: NodeTracerProvider | null = null;

/**
 * Sets up tracing with OpenTelemetry.
 */
export const setupTracing = () => {
  const environment = process.env.NODE_ENV || 'development';
  const traceExporterType = process.env.TRACE_EXPORTER || 'console';
  const samplingRate = Number(process.env.TRACE_SAMPLING_RATE || '1');
  const otelExporterUrl = process.env.OTEL_EXPORTER_URL || 'http://localhost:4318/v1/traces';

  const sampler = samplingRate === 1 ? new AlwaysOnSampler() : new TraceIdRatioBasedSampler(samplingRate);

  provider = new NodeTracerProvider({
    sampler,
  });

  // Configure span processor based on exporter type
  if (traceExporterType === 'console') {
    provider.addSpanProcessor(new BatchSpanProcessor(new ConsoleSpanExporter()));
  } else if (traceExporterType === 'otlp') {
    provider.addSpanProcessor(new BatchSpanProcessor(new OTLPTraceExporter({ url: otelExporterUrl })));
  } else {
    logger.warn(`Unknown TRACE_EXPORTER: ${traceExporterType}. Defaulting to console exporter.`);
    provider.addSpanProcessor(new BatchSpanProcessor(new ConsoleSpanExporter()));
  }

  provider.register();

  // Register instrumentations for Fastify, HTTP, and Pino
  registerInstrumentations({
    instrumentations: [new FastifyInstrumentation(), new HttpInstrumentation(), new PinoInstrumentation()],
  });

  logger.info(
    `Tracing initialized in ${environment} mode with ${traceExporterType} exporter (url: ${otelExporterUrl})`,
  );
};

/**
 * Shuts down the tracing provider gracefully.
 */
export const shutdownTracing = async () => {
  if (provider) {
    try {
      await provider.shutdown();
      logger.info('Tracing provider shut down successfully');
    } catch (err) {
      logger.error('Error shutting down tracing provider:', err);
    }
  } else {
    logger.warn('Tracing provider was not initialized');
  }
};

/**
 * Retrieves the tracer instance for manual instrumentation.
 */
export const tracer = trace.getTracer('application');
