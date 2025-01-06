import { context, Span, SpanStatusCode, trace, Tracer } from '@opentelemetry/api';

const getTracer = (): Tracer => {
  return trace.getTracer('react-app', '1.0.0');
};

const getActiveSpan = (): Span | undefined => {
  return trace.getActiveSpan();
};

export const getCurrentSpan = () => {
  return trace.getActiveSpan();
};

export const logToOpenTelemetry = (error: unknown): void => {
  if (process.env.NODE_ENV === 'local') {
    console.log('Telemetry is disabled in local environment');
    return;
  }

  const tracer = getTracer();
  const activeSpan = getActiveSpan();

  if (activeSpan) {
    activeSpan.setStatus({
      code: SpanStatusCode.ERROR,
      message: String(error),
    });
    activeSpan.recordException(error instanceof Error ? error : new Error(String(error)));
    activeSpan.addEvent('Error captured', { error: String(error) });
  } else {
    // Create a new span if none is active
    const span = tracer.startSpan('Unhandled Error', {}, context.active());
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: String(error),
    });
    span.recordException(error instanceof Error ? error : new Error(String(error)));
    span.addEvent('Error captured', { error: String(error) });
    span.end();
  }
};
