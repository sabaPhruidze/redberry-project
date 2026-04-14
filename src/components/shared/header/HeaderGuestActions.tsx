import STAR3 from "../../../assets/icons/header/three_star.svg?react";
import Button from "../../ui/Button";
import OutlineButton from "../../ui/OutlineButton";
import { Link, useLocation } from "react-router-dom";

type HeaderGuestActionsProps = {
  onLoginClick: () => void;
  onRegisterClick: () => void;
};

const HeaderGuestActions = ({
  onLoginClick,
  onRegisterClick,
}: HeaderGuestActionsProps) => {
  const { pathname } = useLocation();
  const isCatalogPage = pathname === "/courses/catalog";

  return (
    <div className="flex w-[510px] h-[56px] items-center gap-[51px]">
      <Link
        to="/courses/catalog"
        className="flex w-[220px] flex-row items-center border-1 border-black px-[15px]"
      >
        <STAR3
          aria-hidden
          className={`w-[26px] h-[26px] [&_path]:stroke-current ${
            isCatalogPage ? "text-[#4F46E5]" : "text-[#525252]"
          }`}
        />
        <p
          className={`w-[156px] font-[500] text-[20px] ${
            isCatalogPage ? "text-[#4F46E5]" : "text-redberry-text-gray-light"
          }`}
        >
          Browse Courses
        </p>
      </Link>
      <div className="flex flex-row gap-[15px]">
        <OutlineButton
          text="Log In"
          classname="w-[114px] h-[60px]"
          onClick={onLoginClick}
        />
        <Button
          text="Sign Up"
          classname="text-[20px] w-[125px] h-[60px]"
          onClick={onRegisterClick}
        />
      </div>
    </div>
  );
};

export default HeaderGuestActions;
