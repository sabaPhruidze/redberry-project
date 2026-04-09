import { Link } from "react-router-dom";
import LOGO from "../../assets/icons/header/Logo.svg";
import STAR3 from "../../assets/icons/header/three_star.svg";
import OPENED_BOOK from "../../assets/icons/header/opened_book.svg";
import AVATAR_ICON from "../../assets/icons/header/Avatar.svg";
import Button from "../ui/Button";
import OutlineButton from "../ui/OutlineButton";
import { useAuthModal } from "../../features/auth/hooks/useAuthModal";

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
  } = useAuthModal();
  const isAuthenticated = getIsAuthenticated();

  return (
    <header className="w-[1920px] h-[108px] border-b-1 border-b-redberry-border-gray">
      <div className="w-full h-full px-[177px] flex flex-row justify-between items-center">
        <Link to="/">
          <img alt="logo" src={LOGO} className="w-15 h-15" />
        </Link>
        {isAuthenticated ? (
          <div
            className="flex w-[547px] h-[56px] items-center gap-[36px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <div className="flex w-[447px] h-[56px] items-center gap-[8px]">
              <Link
                to="/courses/catalog"
                className="flex h-[56px] w-[220px] items-center gap-[8px] rounded-[8px] p-[15px]"
              >
                <span className="flex h-[26px] w-[190px] items-center gap-[8px]">
                  <img src={STAR3} alt="3 stars" className="w-[26px] h-[26px]" />
                  <p className="h-[24px] w-[156px] font-[500] text-[20px] leading-[100%] text-redberry-text-gray-light">
                    Browse Courses
                  </p>
                </span>
              </Link>
              <button
                type="button"
                className="flex h-[56px] w-[227px] items-center gap-[8px] rounded-[8px] p-[15px]"
              >
                <span className="flex h-[26px] w-[197px] items-center gap-[8px]">
                  <img
                    src={OPENED_BOOK}
                    alt="opened book"
                    className="h-[26px] w-[26px]"
                  />
                  <span className="h-[24px] w-[163px] text-left font-[500] text-[20px] leading-[100%] text-[#666666]">
                    Enrolled Courses
                  </span>
                </span>
              </button>
            </div>
            <button
              type="button"
              onClick={openProfileModal}
              className="h-[56px] w-[56px] rounded-full bg-[#EEEDFC]"
            >
              <img
                src={AVATAR_ICON}
                alt="avatar icon"
                className="h-[56px] w-[56px]"
              />
            </button>
          </div>
        ) : (
          <div className="flex w-[510px] h-[56px] items-center gap-[51px]">
            <div className="flex flex-row items-center w-[220px] px-[15px] border-1 border-black">
              <img src={STAR3} alt="3 stars" className="w-[26px] h-[26px]" />
              <p className="w-[156px] font-[500] text-[20px] text-redberry-text-gray-light">
                Browse Courses
              </p>
            </div>
            <div className="flex flex-row gap-[15px]">
              <OutlineButton
                text="Log In"
                classname="w-[114px] h-[60px]"
                onClick={openLoginModal}
              />
              <Button
                text="Sign Up"
                classname="text-[20px] w-[125px] h-[60px]"
                onClick={openRegisterModal}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
