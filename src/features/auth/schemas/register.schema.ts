import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(1, "Username is required")
      .min(3, "Username must be at least 3 characters"),
    email: z
      .string("Please enter a valid email")
      .trim()
      .min(1, "Email is required")
      .min(3, "Email must be at least 3 characters"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(3, "Password must be at least 3 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
    avatar: z.union([z.instanceof(File), z.null()]).optional(),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
