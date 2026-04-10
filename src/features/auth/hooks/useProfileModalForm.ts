import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, type ProfileFormValues } from "../schemas/profile.schema";
import { isProfileComplete } from "../helpers/profile";
import {
  getStoredProfileState,
  INCOMPLETE_PROFILE_CLOSE_TEXT,
  type ProfileFormInputValues,
} from "../helpers/profileModalForm";

type UseProfileModalFormParams = {
  onClose?: () => void;
};

const getCompletionAgeValue = (value: unknown) => {
  if (typeof value === "number" || typeof value === "string") {
    return value;
  }

  return "";
};

export const useProfileModalForm = ({ onClose }: UseProfileModalFormParams) => {
  const storedProfile = useMemo(() => getStoredProfileState(), []);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm<ProfileFormInputValues, unknown, ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    defaultValues: storedProfile.values,
  });

  const watchedValues = useWatch({ control });

  const handleAttemptClose = () => {
    const profileIsComplete = isProfileComplete({
      fullName: watchedValues.fullName ?? "",
      email: watchedValues.email ?? "",
      mobileNumber: watchedValues.mobileNumber ?? "",
      age: getCompletionAgeValue(watchedValues.age),
    });

    const shouldConfirmClose =
      !storedProfile.profileComplete || !profileIsComplete || isDirty;

    if (shouldConfirmClose && !window.confirm(INCOMPLETE_PROFILE_CLOSE_TEXT)) {
      return;
    }

    onClose?.();
  };

  const handleAvatarChange = (avatar: File | null) => {
    setValue("avatar", avatar, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    isDirty,
    watchedValues,
    handleAttemptClose,
    handleAvatarChange,
  };
};
