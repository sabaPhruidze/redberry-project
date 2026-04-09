export type SignUpStep = 1 | 2 | 3;

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: File | null;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisteredUser = {
  id: number;
  username: string;
  email: string;
  avatar: string;
  fullName: string;
  mobileNumber: string;
  age: number;
  profileComplete: boolean;
};

export type AuthResponseData = {
  user: RegisteredUser;
  token: string;
};

export type RegisterResponseData = AuthResponseData;
export type LoginResponseData = AuthResponseData;
