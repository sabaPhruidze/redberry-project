import { z } from "zod";
import { profileSchema } from "../schemas/profile.schema";

export const INCOMPLETE_PROFILE_CLOSE_TEXT =
  "Your profile is incomplete. You won't be able to enroll in courses until you complete it. Close anyway?";

export type ProfileFormInputValues = z.input<typeof profileSchema>;

type StoredAuthUser = {
  username?: string;
  fullName?: string;
  email?: string;
  mobileNumber?: string;
  age?: number;
  avatar?: string;
  profileComplete?: boolean;
};

type StoredProfileState = {
  username: string;
  values: ProfileFormInputValues;
  profileComplete: boolean;
};

const EMPTY_PROFILE_DEFAULTS: ProfileFormInputValues = {
  fullName: "",
  email: "",
  mobileNumber: "",
  age: "",
  avatar: null,
};

export const getStoredProfileState = (): StoredProfileState => {
  if (typeof window === "undefined") {
    return {
      username: "Username",
      values: EMPTY_PROFILE_DEFAULTS,
      profileComplete: false,
    };
  }

  const rawUser = localStorage.getItem("auth_user");
  if (!rawUser) {
    return {
      username: "Username",
      values: EMPTY_PROFILE_DEFAULTS,
      profileComplete: false,
    };
  }

  try {
    const parsedUser = JSON.parse(rawUser) as StoredAuthUser;

    return {
      username: parsedUser.username?.trim() || "Username",
      values: {
        fullName: parsedUser.fullName?.trim() ?? "",
        email: parsedUser.email?.trim() ?? "",
        mobileNumber: parsedUser.mobileNumber?.trim() ?? "",
        age:
          typeof parsedUser.age === "number" && Number.isFinite(parsedUser.age)
            ? String(parsedUser.age)
            : "",
        avatar: parsedUser.avatar?.trim() ?? null,
      },
      profileComplete: Boolean(parsedUser.profileComplete),
    };
  } catch {
    return {
      username: "Username",
      values: EMPTY_PROFILE_DEFAULTS,
      profileComplete: false,
    };
  }
};
