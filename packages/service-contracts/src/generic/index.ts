import { z } from 'zod';

export const GenericSuccessResponse = z.object({
  success: z.boolean(),
});

export type TGenericSuccessResponse = z.infer<typeof GenericSuccessResponse>;
