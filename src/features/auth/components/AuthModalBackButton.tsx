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
      <svg
        width="16"
        height="32"
        viewBox="0 0 16 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(-180deg)" }}
      >
        <path
          d="M5 8L11 16L5 24"
          stroke="#8A8A8A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default AuthModalBackButton;
