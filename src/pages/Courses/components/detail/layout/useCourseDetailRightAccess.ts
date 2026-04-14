import { useAuthModal } from "../../../../../features/auth/hooks/useAuthModal";
import {
  getAuthUser,
  getIsProfileCompleteFromUser,
} from "../../../../../features/profile/helpers/authUser";
import type { NoticeVariant } from "../../../../../types/courseDetailRight";

export const useCourseDetailRightAccess = () => {
  const { openLoginModal, openProfileModal } = useAuthModal();
  const authUser = getAuthUser();
  const isAuthenticated =
    typeof window !== "undefined" &&
    Boolean(localStorage.getItem("access_token"));
  const isProfileComplete = getIsProfileCompleteFromUser(authUser);
  const hasCompleteAccess = isAuthenticated && isProfileComplete;
  const noticeVariant: NoticeVariant = !isAuthenticated
    ? "auth"
    : !isProfileComplete
      ? "profile"
      : null;

  return {
    hasCompleteAccess,
    noticeVariant,
    openLoginModal,
    openProfileModal,
    isAuthenticated,
  };
};
