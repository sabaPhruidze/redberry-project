import { Link } from "react-router-dom";
import LOGO from "../../assets/icons/header/Logo.svg";
import STAR3 from "../../assets/icons/header/Nav icon.svg";
import Button from "../ui/Button";
import OutlineButton from "../ui/OutlineButton";
import { useAuthModal } from "../../features/auth/hooks/useAuthModal";

const Header = () => {
  const { openLoginModal } = useAuthModal();

  return (
    <header className="w-[1920px] h-[108px] border-b-1 border-b-redberry-border-gray">
      <div className="w-full h-full px-[177px] flex flex-row justify-between items-center">
        <Link to="/">
          <img alt="logo" src={LOGO} className="w-15 h-15" />
        </Link>
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
            <Button text="Sign Up" classname="text-[20px] w-[125px] h-[60px]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
