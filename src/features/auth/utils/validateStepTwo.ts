import type { StepTwoErrors } from "../types/stepTwoErrors";

type ValidateStepTwoParams = {
  password: string;
  confirmPassword: string;
};

export const validateStepTwo = ({
  password,
  confirmPassword,
}: ValidateStepTwoParams): StepTwoErrors => {
  const errors: StepTwoErrors = {};

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 3) {
    errors.password = "Password must be at least 3 characters";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Passwords must match";
  }

  return errors;
};
