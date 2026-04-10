type ProfileCompletionInput = {
  fullName?: string | null;
  email?: string | null;
  mobileNumber?: string | null;
  age?: number | string | null;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FULL_NAME_CHARS_REGEX = /^[\p{L} ]+$/u;

export const normalizeGeorgianMobile = (value: string) =>
  value.replace(/\s+/g, "");

export const isValidEmail = (value?: string | null) =>
  Boolean(value?.trim()) && EMAIL_REGEX.test(value?.trim() ?? "");

export const isValidFullNameCharacters = (value: string) =>
  FULL_NAME_CHARS_REGEX.test(value);

export const isValidFullName = (value?: string | null) => {
  const safeValue = value?.trim() ?? "";
  return (
    safeValue.length >= 3 &&
    safeValue.length <= 50 &&
    isValidFullNameCharacters(safeValue)
  );
};

export const isValidGeorgianMobile = (value?: string | null) => {
  const normalizedMobile = normalizeGeorgianMobile(value ?? "");
  return /^\d{9}$/.test(normalizedMobile) && normalizedMobile.startsWith("5");
};

export const isValidAge = (value?: number | string | null) => {
  const numericValue =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number(value.trim())
        : Number.NaN;

  return (
    Number.isInteger(numericValue) &&
    numericValue >= 16 &&
    numericValue <= 120
  );
};

export const isProfileComplete = (profile: ProfileCompletionInput) => {
  return (
    isValidFullName(profile.fullName) &&
    isValidEmail(profile.email) &&
    isValidGeorgianMobile(profile.mobileNumber) &&
    isValidAge(profile.age)
  );
};
