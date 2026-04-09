import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string("Please enter a valid email")
    .trim()
    .min(1, "Email is required")
    .min(3, "Email must be at least 3 characters"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(3, "Password must be at least 3 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
