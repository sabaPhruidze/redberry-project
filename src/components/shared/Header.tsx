import { Link } from "react-router-dom";
import LOGO from "../../assets/icons/header/Logo.svg";
import { useAuthModal } from "../../features/auth/hooks/useAuthModal";
import {
  getAuthUser,
  getIsProfileCompleteFromUser,
} from "../../features/profile/helpers/authUser";
import HeaderAuthenticatedActions from "./HeaderAuthenticatedActions";
import HeaderGuestActions from "./HeaderGuestActions";

const getIsAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(localStorage.getItem("access_token"));
};

const Header = () => {
  const {
    openLoginModal,
    openRegisterModal,
    openProfileModal,
    openEnrolledCoursesModal,
  } = useAuthModal();
  const isAuthenticated = getIsAuthenticated();
  const authUser = getAuthUser();
  const isProfileComplete = getIsProfileCompleteFromUser(authUser);

  return (
    <header className="w-[1920px] h-[108px] border-b-1 border-b-redberry-border-gray">
      <div className="w-full h-full px-[177px] flex flex-row justify-between items-center">
        <Link to="/">
          <img alt="logo" src={LOGO} className="w-15 h-15" />
        </Link>
        {isAuthenticated ? (
          <HeaderAuthenticatedActions
            isProfileComplete={isProfileComplete}
            onProfileClick={openProfileModal}
            onEnrolledCoursesClick={openEnrolledCoursesModal}
          />
        ) : (
          <HeaderGuestActions
            onLoginClick={openLoginModal}
            onRegisterClick={openRegisterModal}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
