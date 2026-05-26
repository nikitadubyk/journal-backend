import { z } from 'zod';

export const createWorkLogSchema = z.object({
  date: z.string(),
  unit: z.string().min(1),
  volume: z.number().positive(),
  workerName: z.string().min(1),
  workTypeId: z.number().int().positive(),
});

export const updateWorkLogSchema = createWorkLogSchema.partial();
