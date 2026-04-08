export type SignUpStep = 1 | 2 | 3;

export type SignUpFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const INITIAL_SIGN_UP_FORM: SignUpFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
};
