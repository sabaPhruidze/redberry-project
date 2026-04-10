import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, type ProfileFormValues } from "../schemas/profile.schema";
import { isProfileComplete } from "../helpers/profile";
import {
  getStoredProfileState,
  type ProfileFormInputValues,
} from "../helpers/profileModalForm";

const getCompletionAgeValue = (value: unknown) => {
  if (typeof value === "number" || typeof value === "string") {
    return value;
  }

  return "";
};

export const useProfileModalForm = () => {
  const storedProfile = useMemo(() => getStoredProfileState(), []);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<ProfileFormInputValues, unknown, ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    defaultValues: storedProfile.values,
  });

  const watchedValues = useWatch({ control });
  const profileIsComplete = useMemo(
    () =>
      isProfileComplete({
        fullName: watchedValues.fullName ?? "",
        email: watchedValues.email ?? "",
        mobileNumber: watchedValues.mobileNumber ?? "",
        age: getCompletionAgeValue(watchedValues.age),
      }),
    [
      watchedValues.fullName,
      watchedValues.email,
      watchedValues.mobileNumber,
      watchedValues.age,
    ],
  );
  const shouldConfirmClose = !profileIsComplete;
  const canCloseOnOverlay = profileIsComplete;

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
    username: storedProfile.username,
    watchedValues,
    profileIsComplete,
    shouldConfirmClose,
    canCloseOnOverlay,
    handleAvatarChange,
  };
};
