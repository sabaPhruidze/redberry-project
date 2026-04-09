import { api } from "../http";
import type {
  LoginPayload,
  LoginResponseData,
  RegisterPayload,
  RegisterResponseData,
} from "../../features/auth/types/signup";

const createRegisterFormData = (payload: RegisterPayload) => {
  const formData = new FormData();

  formData.append("username", payload.username);
  formData.append("email", payload.email);
  formData.append("password", payload.password);
  formData.append("password_confirmation", payload.confirmPassword);

  if (payload.avatar) {
    formData.append("avatar", payload.avatar);
  }

  return formData;
};

export const register = async (payload: RegisterPayload) => {
  const response = await api.post<{ data: RegisterResponseData }>(
    "/register",
    createRegisterFormData(payload),
  );

  return response.data.data;
};

export const login = async (payload: LoginPayload) => {
  const response = await api.post<{ data: LoginResponseData }>("/login", payload);
  return response.data.data;
};
