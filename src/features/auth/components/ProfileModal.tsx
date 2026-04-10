import { useEffect, useMemo, useState } from "react";
import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import { useProfileModalForm } from "../hooks/useProfileModalForm";
import { useUpdateProfile } from "../../profile/hooks/useUpdateProfile";
import { syncAuthUser } from "../../profile/helpers/authUser";
import AuthModalShell from "./AuthModalShell";
import ProfileHeader from "./ProfileHeader";
import ProfileIdentityBlock from "./ProfileIdentityBlock";
import ProfileFieldsLayout from "./ProfileFieldsLayout";

type ProfileModalProps = { onClose?: () => void };

const ProfileModal = ({ onClose }: ProfileModalProps) => {
  useLockBodyScroll(true);
  const [hasSubmitAttempted, setHasSubmitAttempted] = useState(false);
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    isDirty,
    watchedValues,
    handleAttemptClose,
    handleAvatarChange,
  } = useProfileModalForm({ onClose });
  const { submitProfile, isPending, serverError, clearServerError } =
    useUpdateProfile();

  const avatarUrl = useMemo(() => {
    if (watchedValues.avatar instanceof File) return URL.createObjectURL(watchedValues.avatar);
    if (typeof watchedValues.avatar === "string" && watchedValues.avatar.trim()) return watchedValues.avatar.trim();
    return undefined;
  }, [watchedValues.avatar]);

  useEffect(() => {
    if (!avatarUrl?.startsWith("blob:")) return;
    return () => URL.revokeObjectURL(avatarUrl);
  }, [avatarUrl]);

  const handleSafeSubmit = handleSubmit(async (values) => {
    setHasSubmitAttempted(true);
    if (isPending) return;

    const updatedUser = await submitProfile({
      fullName: values.fullName,
      mobileNumber: values.mobileNumber,
      age: values.age,
      avatar: values.avatar instanceof File ? values.avatar : null,
    });
    if (!updatedUser) return;

    syncAuthUser(updatedUser);
    window.alert("Profile updated successfully");
    onClose?.();
  }, () => {
    setHasSubmitAttempted(true);
    clearServerError();
  });

  const handleModalClose = () => {
    if (isPending) return;
    handleAttemptClose();
  };

  return (
    <AuthModalShell onClose={handleModalClose} closeAriaLabel="Close profile panel" panelClassName="h-[730px] px-[50px] py-[49px]" contentClassName="h-[632px]" closeButtonClassName="top-[21px] right-[12px]" enableCloseActions={true} closeOnOverlayClick>
      <form onSubmit={handleSafeSubmit}>
        <ProfileHeader />
        <ProfileIdentityBlock username={watchedValues.fullName?.trim() || "Username"} avatarUrl={avatarUrl} />
        <ProfileFieldsLayout control={control} errors={errors} watchedValues={watchedValues} isDirty={isDirty} isValid={isValid} isSubmitting={isPending} hasSubmitAttempted={hasSubmitAttempted} submitError={serverError} onAvatarChange={handleAvatarChange} />
      </form>
    </AuthModalShell>
  );
};

export default ProfileModal;
