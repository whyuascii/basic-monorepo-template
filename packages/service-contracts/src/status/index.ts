import { z } from 'zod';

export const HealthCheckResponse = z.object({
  healthy: z.boolean(),
  environment: z.string(),
});
