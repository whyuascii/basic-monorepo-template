import { logToOpenTelemetry } from '../telemetry';

export const handleError = (error: unknown): void => {
  console.error('An error occurred:', error);

  // Log to OpenTelemetry
  logToOpenTelemetry(error);

  // You could add more external error logging services here if needed.
};
