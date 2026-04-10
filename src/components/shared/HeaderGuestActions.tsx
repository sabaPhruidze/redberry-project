import STAR3 from "../../assets/icons/header/three_star.svg";
import Button from "../ui/Button";
import OutlineButton from "../ui/OutlineButton";

type HeaderGuestActionsProps = {
  onLoginClick: () => void;
  onRegisterClick: () => void;
};

const HeaderGuestActions = ({
  onLoginClick,
  onRegisterClick,
}: HeaderGuestActionsProps) => {
  return (
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
