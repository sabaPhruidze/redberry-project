import { useAuthModal } from "./useAuthModal";
import { runProtectedAction } from "../helpers/protectedAction";
import { useRequireCompleteProfile } from "../../profile/hooks/useRequireCompleteProfile";

const getIsAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(localStorage.getItem("access_token"));
};

export const useProtectedAction = () => {
  const { openLoginModal } = useAuthModal();
  const { runWithCompleteProfile } = useRequireCompleteProfile();

  const handleProtectedAction = (action?: () => void) => {
    runProtectedAction({
      isAuthenticated: getIsAuthenticated(),
      openLoginModal,
      action,
    });
  };

  const handleProtectedEnrollAction = (action?: () => void) =>
    runWithCompleteProfile(action);

  return { handleProtectedAction, handleProtectedEnrollAction };
};
