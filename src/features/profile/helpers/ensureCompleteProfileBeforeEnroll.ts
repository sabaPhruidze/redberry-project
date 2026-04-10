import type { RegisteredUser } from "../../auth/types/signup";
import { getAuthUser, getIsProfileCompleteFromUser } from "./authUser";

type EnsureResult =
  | { blocked: true; reason: "unauthenticated" | "incomplete_profile" }
  | { blocked: false; user: RegisteredUser };

const getIsAuthenticated = () => {
  if (typeof window === "undefined") return false;
  return Boolean(localStorage.getItem("access_token"));
};

export const ensureCompleteProfileBeforeEnroll = (): EnsureResult => {
  if (!getIsAuthenticated()) {
    return { blocked: true, reason: "unauthenticated" };
  }

  const authUser = getAuthUser();
  if (!authUser || !getIsProfileCompleteFromUser(authUser)) {
    return { blocked: true, reason: "incomplete_profile" };
  }

  return { blocked: false, user: authUser };
};
