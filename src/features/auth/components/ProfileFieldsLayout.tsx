import { useFormState, type Control, type FieldErrors } from "react-hook-form";
import type { ProfileFormInputValues } from "../helpers/profileModalForm";
import type { ProfileFormValues } from "../schemas/profile.schema";
import ProfileAvatar from "./ProfileAvatar";
import ProfileControlledField from "./ProfileControlledField";

type ProfileFieldsLayoutProps = {
  control: Control<ProfileFormInputValues, unknown, ProfileFormValues>;
  errors: FieldErrors<ProfileFormInputValues>;
  watchedValues: Partial<ProfileFormInputValues>;
  isDirty: boolean;
  isValid: boolean;
  isSubmitting: boolean;
  hasSubmitAttempted: boolean;
  submitError?: string;
  onAvatarChange: (avatar: File | null) => void;
};

const hasFilledValue = (value: unknown) =>
  (typeof value === "string" && value.trim().length > 0) ||
  (typeof value === "number" && Number.isFinite(value));

const ProfileFieldsLayout = ({
  control,
  errors,
  watchedValues,
  isDirty,
  isValid,
  isSubmitting,
  hasSubmitAttempted,
  submitError,
  onAvatarChange,
}: ProfileFieldsLayoutProps) => {
  const { touchedFields } = useFormState({ control });
  const isValidated = (name: keyof ProfileFormInputValues) =>
    Boolean(touchedFields[name]) || hasSubmitAttempted;
  const fieldError = (name: keyof ProfileFormInputValues) => {
    return isValidated(name)
      ? String(errors[name]?.message ?? "") || undefined
      : undefined;
  };
  const success = (name: keyof ProfileFormInputValues, error?: string) =>
    isValidated(name) && !error && hasFilledValue(watchedValues[name]);
  const nameError = fieldError("fullName");
  const mobileError = fieldError("mobileNumber");
  const ageError = fieldError("age");

  return (
    <div className="flex w-[360px] flex-col gap-[12px]" style={{ fontFamily: "Inter, sans-serif" }}>
      <ProfileControlledField control={control} name="fullName" id="profile-full-name" label="Full Name" placeholder="Username" trailingIconType="pencil" error={nameError} success={success("fullName", nameError)} fieldBackgroundColor="#F5F5F5" fieldBorderColor="#ADADAD" />
      <ProfileControlledField control={control} name="email" id="profile-email" label="Email" type="email" placeholder="Email@gmail.com" readOnly disabled trailingIconType="check" success={false} fieldBackgroundColor="#F5F5F5" fieldBorderColor="#ADADAD" />
      <div className="flex w-[360px] items-start gap-[8px]">
        <ProfileControlledField control={control} name="mobileNumber" id="profile-mobile-number" label="Mobile Number" placeholder="+995 599209820" trailingIconType="check" error={mobileError} success={success("mobileNumber", mobileError)} wrapperClassName="h-[73px] w-[267px]" labelClassName="w-[267px]" inputBoxClassName="relative" labelInputGapClassName="mt-[8px]" trailingIconContainerClassName="absolute right-[14px] top-[12px] flex h-[22px] w-[22px] items-center justify-center" />
        <ProfileControlledField control={control} name="age" id="profile-age" label="Age" type="number" placeholder="29" trailingIconType="arrow" error={ageError} success={success("age", ageError)} wrapperClassName="h-[73px] w-[85px]" labelClassName="w-[85px]" inputBoxClassName="relative" labelInputGapClassName="mt-[8px]" trailingIconContainerClassName="absolute right-[14px] top-[12px] flex h-[22px] w-[22px] items-center justify-center" />
      </div>
      <ProfileAvatar onAvatarChange={onAvatarChange} disabled={isSubmitting} />
      <button type="submit" disabled={!isValid || !isDirty || isSubmitting} className="flex h-[47px] w-[360px] items-center justify-center gap-[10px] rounded-[8px] bg-[#4F46E5] pt-[17px] pr-[25px] pb-[17px] pl-[25px] text-white disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? "Saving..." : "Save Profile"}
      </button>
      {submitError ? (
        <p className="mt-[4px] text-[12px] leading-[100%] text-[#F4161A]" style={{ fontWeight: 400 }}>
          {submitError}
        </p>
      ) : null}
    </div>
  );
};

export default ProfileFieldsLayout;
