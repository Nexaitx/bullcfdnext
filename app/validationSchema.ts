import { z } from "zod";

export const createLeadSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.email().min(1, "Email is required").max(255),
  phone: z.string().min(10, "Phone is required").max(15),
  city: z.string().min(1, "City is required").max(255),
  terms: z.literal(true, { message: "You must accept the terms and conditions" }),
});
