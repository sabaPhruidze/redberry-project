import { useEffect, useMemo, useState } from "react";
import { useLockBodyScroll } from "../../../../hooks/use-lock-body-scroll";
import { useUpdateProfile } from "../../../profile/hooks/useUpdateProfile";
import { syncAuthUser } from "../../../profile/helpers/authUser";
import type { ProfileStatus } from "../../helpers/profileStatus";
import { useProfileModalForm } from "../../hooks/useProfileModalForm";
import AuthModalShell from "../modal-layout/AuthModalShell";
import ProfileClosePrompt from "./ProfileClosePrompt";
import ProfileFieldsLayout from "./ProfileFieldsLayout";
import ProfileHeader from "./ProfileHeader";
import ProfileIdentityBlock from "./ProfileIdentityBlock";

type ProfileModalProps = { onClose?: () => void };

const ProfileModal = ({ onClose }: ProfileModalProps) => {
  useLockBodyScroll(true);
  const [hasSubmitAttempted, setHasSubmitAttempted] = useState(false);
  const [isClosePromptOpen, setIsClosePromptOpen] = useState(false);
  const { control, handleSubmit, errors, isValid, username, watchedValues, profileIsComplete, shouldConfirmClose, canCloseOnOverlay, handleAvatarChange } = useProfileModalForm();
  const { submitProfile, isPending, serverError, clearServerError } = useUpdateProfile();
  const profileStatus: ProfileStatus = serverError || Object.keys(errors).length > 0 ? "error" : profileIsComplete ? "complete" : "incomplete";

  const avatarUrl = useMemo(() => {
    if (watchedValues.avatar instanceof File) return URL.createObjectURL(watchedValues.avatar);
    if (typeof watchedValues.avatar === "string" && watchedValues.avatar.trim()) return watchedValues.avatar.trim();
    return undefined;
  }, [watchedValues.avatar]);

  useEffect(() => {
    if (!avatarUrl?.startsWith("blob:")) return;
    return () => URL.revokeObjectURL(avatarUrl);
  }, [avatarUrl]);

  const handleRequestClose = () => {
    if (isPending) return;
    if (shouldConfirmClose) return setIsClosePromptOpen(true);
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
    const updatedUser = await submitProfile({ fullName: values.fullName, mobileNumber: values.mobileNumber, age: values.age, avatar: values.avatar instanceof File ? values.avatar : null });
    if (!updatedUser) return;
    setIsClosePromptOpen(false);
    syncAuthUser(updatedUser);
    onClose?.();
  }, () => {
    setHasSubmitAttempted(true);
    clearServerError();
  });

  const isClosePromptVisible = shouldConfirmClose && isClosePromptOpen;

  return (
    <AuthModalShell onClose={handleRequestClose} closeAriaLabel="Close profile panel" panelClassName="px-[50px] py-[49px]" contentClassName="gap-[12px]" closeButtonClassName="top-[21px] right-[12px]" enableCloseActions={true} closeOnOverlayClick={canCloseOnOverlay && !isPending} overlayClassName="backdrop-blur-[2px]">
      <form onSubmit={handleSafeSubmit}>
        <ProfileHeader />
        <ProfileIdentityBlock username={username} avatarUrl={avatarUrl} status={profileStatus} />
        <ProfileFieldsLayout control={control} errors={errors} watchedValues={watchedValues} isValid={isValid} isSubmitting={isPending} hasSubmitAttempted={hasSubmitAttempted} submitError={serverError} onAvatarChange={handleAvatarChange} onCloseClick={handleRequestClose} />
      </form>
      {isClosePromptVisible ? <ProfileClosePrompt onStay={handleStayInModal} onCloseAnyway={handleCloseAnyway} /> : null}
    </AuthModalShell>
  );
};

export default ProfileModal;
