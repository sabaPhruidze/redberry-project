import { z } from "zod";
import {
  isValidFullNameCharacters,
  normalizeGeorgianMobile,
} from "../helpers/profile";

const georgianMobileSchema = z
  .string()
  .refine(
    (value) => normalizeGeorgianMobile(value).length > 0,
    "Mobile number is required",
  )
  .refine((value) => {
    const normalizedMobile = normalizeGeorgianMobile(value);
    return normalizedMobile.length === 0 || /^\d+$/.test(normalizedMobile);
  }, "Please enter a valid Georgian mobile number (9 digits starting with 5)")
  .refine((value) => {
    const normalizedMobile = normalizeGeorgianMobile(value);
    return (
      normalizedMobile.length === 0 ||
      !/^\d+$/.test(normalizedMobile) ||
      normalizedMobile.startsWith("5")
    );
  }, "Georgian mobile numbers must start with 5")
  .refine((value) => {
    const normalizedMobile = normalizeGeorgianMobile(value);
    return (
      normalizedMobile.length === 0 ||
      !/^\d+$/.test(normalizedMobile) ||
      normalizedMobile.length === 9
    );
  }, "Mobile number must be exactly 9 digits");

const ageSchema = z.preprocess(
  (value) => {
    if (value === null || value === undefined) {
      return "";
    }

    if (typeof value === "number") {
      return String(value);
    }

    if (typeof value === "string") {
      return value.trim();
    }

    return value;
  },
  z
    .string()
    .min(1, "Age is required")
    .refine((value) => /^\d+$/.test(value), "Age must be a number")
    .transform((value) => Number(value))
    .refine(
      (value) => Number(value) >= 16,
      "You must be at least 16 years old to enroll",
    )
    .refine((value) => value <= 120, "Please enter a valid age"),
);

export const profileSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(3, "Name must be at least 3 characters")
    .refine(
      (value) => isValidFullNameCharacters(value),
      "Name can only contain letters and spaces",
    )
    .max(50, "Name must not exceed 50 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  mobileNumber: georgianMobileSchema,
  age: ageSchema,
  avatar: z.union([z.instanceof(File), z.string(), z.null()]).optional(),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
