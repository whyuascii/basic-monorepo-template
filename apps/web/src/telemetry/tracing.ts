import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';

export const initializeOpenTelemetry = (): void => {
  const otelExporterUrl = import.meta.env.VITE_OTEL_EXPORTER_URL || 'http://localhost:4318/v1/traces';

  if (import.meta.env.MODE === 'local') {
    console.log('Telemetry is disabled in local environment');
    return;
  }

  if (!otelExporterUrl) {
    console.warn('OpenTelemetry exporter URL is not configured. Tracing is disabled.');
    return;
  }

  const provider = new WebTracerProvider();

  const collectorExporter = new OTLPTraceExporter({ url: otelExporterUrl });

  provider.addSpanProcessor(new SimpleSpanProcessor(collectorExporter));
  provider.register();

  registerInstrumentations({
    instrumentations: [new FetchInstrumentation()],
    tracerProvider: provider,
  });

  console.log('OpenTelemetry initialized');
};
