import { useAuthModal } from "./useAuthModal";
import { runProtectedAction } from "../helpers/protectedAction";

const getIsAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(localStorage.getItem("access_token"));
};

export const useProtectedAction = () => {
  const { openLoginModal } = useAuthModal();

  const handleProtectedAction = (action?: () => void) => {
    runProtectedAction({
      isAuthenticated: getIsAuthenticated(),
      openLoginModal,
      action,
    });
  };

  return { handleProtectedAction };
};
