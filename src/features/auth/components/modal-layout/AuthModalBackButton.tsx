import BACK_ARROW_ICON from "../../../../assets/icons/authentification/weui_arrow-outlined.svg";

type AuthModalBackButtonProps = {
  onClick: () => void;
};

const AuthModalBackButton = ({ onClick }: AuthModalBackButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Back to previous step"
      className="absolute flex h-8 w-4 items-center justify-center"
      style={{ top: "16.5px", left: "17px" }}
    >
      <img src={BACK_ARROW_ICON} alt="" aria-hidden="true" className="h-8 w-4" />
    </button>
  );
};

export default AuthModalBackButton;
