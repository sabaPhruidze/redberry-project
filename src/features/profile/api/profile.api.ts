import { api } from "../../../api/http";
import type { RegisteredUser } from "../../auth/types/signup";
import { normalizeGeorgianMobile } from "../../auth/helpers/profile";

export type UpdateProfilePayload = {
  fullName: string;
  mobileNumber: string;
  age: number;
  avatar?: File | null;
};

const createUpdateProfileFormData = (payload: UpdateProfilePayload) => {
  const formData = new FormData();

  formData.append("full_name", payload.fullName);
  formData.append("mobile_number", normalizeGeorgianMobile(payload.mobileNumber));
  formData.append("age", String(payload.age));

  if (payload.avatar instanceof File) {
    formData.append("avatar", payload.avatar);
  }

  return formData;
};

export const updateProfile = async (payload: UpdateProfilePayload) => {
  const response = await api.put<{ data: RegisteredUser }>(
    "/profile",
    createUpdateProfileFormData(payload),
  );

  return response.data.data;
};
