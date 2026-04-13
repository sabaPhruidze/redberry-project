import ARROW_RIGHT from "../../../../../assets/icons/courses/Icon Set=ArrowRight.svg?react";
import WARNING from "../../../../../assets/icons/courses/warning.svg";

interface EnrollmentAccessNoticeProps {
  variant: "auth" | "profile";
  onAction: () => void;
}

const NOTICE_CONTENT = {
  auth: {
    title: "Authentication Required",
    description:
      "You need to sign in to your profile before enrolling in this course.",
    actionLabel: "Sign In",
  },
  profile: {
    title: "Complete Your Profile",
    description:
      "You need to fill in your profile details before enrolling in this course.",
    actionLabel: "Complete",
  },
} as const;

const EnrollmentAccessNotice = ({
  variant,
  onAction,
}: EnrollmentAccessNoticeProps) => {
  const content = NOTICE_CONTENT[variant];

  return (
    <div className="flex flex-row justify-between items-center rounded-[12px] w-[530px] h-[102px] p-[20px] bg-[#F8FAFC] border border-[#E5E7EB]">
      <div className="w-[351px] h-[62px] flex flex-col gap-[8px]">
        <div className="w-full h-[24px] flex flex-row items-center gap-[6px]">
          <img src={WARNING} alt="Warning icon" className="w-[22px] h-[22px]" />
          <p className="text-[#292929] font-[500] leading-[24px]">
            {content.title}
          </p>
        </div>
        <p className="mt-[8px] w-full h-[30px] text-[#8A8A8A] leading-[100%] font-[400] text-[12px]">
          {content.description}
        </p>
      </div>
      <button
        type="button"
        onClick={onAction}
        className="w-[110px] h-[46px] rounded-[8px] border border-[#B7B3F4] bg-[#EEEDFC] px-[12px] py-[10px] gap-[6px] flex flex-row items-center justify-center cursor-pointer"
      >
        <p className="text-[#281ED2] font-[400] text-[14px] leading-[26px]">
          {content.actionLabel}
        </p>
        <ARROW_RIGHT
          aria-hidden
          className="w-[16px] h-[16px] text-[#281ED2] [&_path]:fill-current"
        />
      </button>
    </div>
  );
};

export default EnrollmentAccessNotice;


