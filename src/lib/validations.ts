import { z } from "zod";

export const leadSchema = z.object({
  type: z.enum(["GENERAL", "PROPERTY_UNLOCK", "SCHEDULE_VISIT"]),
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email(),
  budget: z.string().optional(),
  message: z.string().optional(),
  propertyId: z.string().optional(),
  preferredDate: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
