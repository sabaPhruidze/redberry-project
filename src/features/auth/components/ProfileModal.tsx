import { useEffect, useMemo, useState } from "react";
import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import { useProfileModalForm } from "../hooks/useProfileModalForm";
import { useUpdateProfile } from "../../profile/hooks/useUpdateProfile";
import { syncAuthUser } from "../../profile/helpers/authUser";
import { INCOMPLETE_PROFILE_CLOSE_TEXT } from "../helpers/profileModalForm";
import type { ProfileStatus } from "../helpers/profileStatus";
import AuthModalShell from "./AuthModalShell";
import ProfileHeader from "./ProfileHeader";
import ProfileIdentityBlock from "./ProfileIdentityBlock";
import ProfileFieldsLayout from "./ProfileFieldsLayout";
import ProfileClosePrompt from "./ProfileClosePrompt";

type ProfileModalProps = { onClose?: () => void };

const ProfileModal = ({ onClose }: ProfileModalProps) => {
  useLockBodyScroll(true);
  const [hasSubmitAttempted, setHasSubmitAttempted] = useState(false);
  const [isClosePromptOpen, setIsClosePromptOpen] = useState(false);
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    username,
    watchedValues,
    profileIsComplete,
    shouldConfirmClose,
    canCloseOnOverlay,
    handleAvatarChange,
  } = useProfileModalForm();
  const { submitProfile, isPending, serverError, clearServerError } =
    useUpdateProfile();
  const hasFieldErrors = Object.keys(errors).length > 0;
  const profileStatus: ProfileStatus =
    serverError || hasFieldErrors
      ? "error"
      : profileIsComplete
        ? "complete"
        : "incomplete";

  const avatarUrl = useMemo(() => {
    if (watchedValues.avatar instanceof File) return URL.createObjectURL(watchedValues.avatar);
    if (typeof watchedValues.avatar === "string" && watchedValues.avatar.trim()) return watchedValues.avatar.trim();
    return undefined;
  }, [watchedValues.avatar]);

  useEffect(() => {
    if (!avatarUrl?.startsWith("blob:")) return;
    return () => URL.revokeObjectURL(avatarUrl);
  }, [avatarUrl]);

  useEffect(() => {
    if (!shouldConfirmClose) {
      setIsClosePromptOpen(false);
    }
  }, [shouldConfirmClose]);

  const handleRequestClose = () => {
    if (isPending) return;
    if (shouldConfirmClose) {
      setIsClosePromptOpen(true);
      return;
    }

    onClose?.();
  };

  const handleStayInModal = () => setIsClosePromptOpen(false);

  const handleCloseAnyway = () => {
    setIsClosePromptOpen(false);
    onClose?.();
  };

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

    setIsClosePromptOpen(false);
    syncAuthUser(updatedUser);
    onClose?.();
  }, () => {
    setHasSubmitAttempted(true);
    clearServerError();
  });

  return (
    <AuthModalShell onClose={handleRequestClose} closeAriaLabel="Close profile panel" panelClassName="px-[50px] py-[49px]" contentClassName="gap-[12px]" closeButtonClassName="top-[21px] right-[12px]" enableCloseActions={true} closeOnOverlayClick={canCloseOnOverlay && !isPending} overlayClassName="backdrop-blur-[2px]">
      <form onSubmit={handleSafeSubmit}>
        <ProfileHeader />
        <ProfileIdentityBlock username={username} avatarUrl={avatarUrl} status={profileStatus} />
        <ProfileFieldsLayout control={control} errors={errors} watchedValues={watchedValues} isValid={isValid} isSubmitting={isPending} hasSubmitAttempted={hasSubmitAttempted} submitError={serverError} onAvatarChange={handleAvatarChange} onCloseClick={handleRequestClose} />
        {isClosePromptOpen ? (
          <ProfileClosePrompt message={INCOMPLETE_PROFILE_CLOSE_TEXT} onStay={handleStayInModal} onCloseAnyway={handleCloseAnyway} />
        ) : null}
      </form>
    </AuthModalShell>
  );
};

export default ProfileModal;
