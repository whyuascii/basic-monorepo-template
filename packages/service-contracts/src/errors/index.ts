import { z } from 'zod';
export const BaseErrorResponse = z.object({
  error: z.string(),
  traceId: z.string(),
  details: z.optional(z.any()), // Details can be a schema if needed
});

export type TBaseErrorResponse = z.infer<typeof BaseErrorResponse>;
