import type { RegisteredUser } from "../../auth/types/signup";
import { isProfileComplete } from "../../auth/helpers/profile";

export const getAuthUser = (): RegisteredUser | null => {
  if (typeof window === "undefined") return null;
  const rawUser = localStorage.getItem("auth_user");
  if (!rawUser) return null;

  try {
    return JSON.parse(rawUser) as RegisteredUser;
  } catch {
    return null;
  }
};

export const getIsProfileCompleteFromUser = (
  user?: Pick<RegisteredUser, "fullName" | "email" | "mobileNumber" | "age"> | null,
) =>
  Boolean(
    user &&
      isProfileComplete({
        fullName: user.fullName,
        email: user.email,
        mobileNumber: user.mobileNumber,
        age: user.age,
      }),
  );

export const syncAuthUser = (user: RegisteredUser) => {
  const syncedUser: RegisteredUser = {
    ...user,
    profileComplete: getIsProfileCompleteFromUser(user),
  };

  localStorage.setItem("auth_user", JSON.stringify(syncedUser));
  return syncedUser;
};
