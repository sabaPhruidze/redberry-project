import CHECK_ICON from "../../../assets/icons/profile/form/Icon Set=Check.svg?react";

type ProfileCompletionIndicatorProps = {
  isComplete: boolean;
};

const ProfileCompletionIndicator = ({
  isComplete,
}: ProfileCompletionIndicatorProps) => {
  if (isComplete) {
    return (
      <span
        aria-hidden="true"
        className="absolute top-[2px] right-[2px] flex h-[14px] w-[14px] items-center justify-center rounded-full border border-white bg-[#6ACF76] text-[9px] leading-none text-white"
      >
        <CHECK_ICON
          aria-hidden="true"
          focusable="false"
          className="h-[8px] w-[8px] [&_path]:!fill-white"
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="absolute top-[4px] right-[4px] h-[10px] w-[10px] rounded-full border border-white bg-[#F2C94C]"
    />
  );
};

export default ProfileCompletionIndicator;
