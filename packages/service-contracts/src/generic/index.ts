import { z } from 'zod';

export const GenericSuccessResponse = z.object({
  success: z.boolean(),
});

export type GenericSuccessResponse = z.infer<typeof GenericSuccessResponse>;
