import { useAuthModal } from "../../../../../features/auth/hooks/useAuthModal";
import { isAuthenticatedClient } from "../../../../../features/auth/helpers/authSession";
import {
  getAuthUser,
  getIsProfileCompleteFromUser,
} from "../../../../../features/profile/helpers/authUser";
import type { NoticeVariant } from "../../../../../types/courseDetailRight";

export const useCourseDetailRightAccess = () => {
  const { openLoginModal, openProfileModal } = useAuthModal();

  const isAuthenticated = isAuthenticatedClient();
  const authUser = getAuthUser();

  const isProfileComplete = isAuthenticated
    ? getIsProfileCompleteFromUser(authUser)
    : false;

  const hasCompleteAccess = isAuthenticated && isProfileComplete;

  const noticeVariant: NoticeVariant = !isAuthenticated
    ? "auth"
    : !isProfileComplete
      ? "profile"
      : null;

  return {
    isAuthenticated,
    isProfileComplete,
    hasCompleteAccess,
    noticeVariant,
    openLoginModal,
    openProfileModal,
  };
};
