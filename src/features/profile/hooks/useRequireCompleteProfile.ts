import { useAuthModal } from "../../auth/hooks/useAuthModal";
import { ensureCompleteProfileBeforeEnroll } from "../helpers/ensureCompleteProfileBeforeEnroll";

const INCOMPLETE_PROFILE_MESSAGE =
  "Please complete your profile to enroll in courses";

export const useRequireCompleteProfile = () => {
  const { openLoginModal, openProfileModal } = useAuthModal();

  const runWithCompleteProfile = (action?: () => void) => {
    const result = ensureCompleteProfileBeforeEnroll();

    if (!result.blocked) {
      action?.();
      return result;
    }

    if (result.reason === "unauthenticated") {
      openLoginModal();
      return result;
    }

    window.alert(INCOMPLETE_PROFILE_MESSAGE);
    openProfileModal();
    return result;
  };

  return { runWithCompleteProfile };
};
