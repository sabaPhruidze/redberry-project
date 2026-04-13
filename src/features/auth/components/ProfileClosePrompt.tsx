import USER_ICON from "../../../assets/icons/profile/user.svg";

type ProfileClosePromptProps = {
  onStay: () => void;
  onCloseAnyway: () => void;
};

const ProfileClosePrompt = ({
  onStay,
  onCloseAnyway,
}: ProfileClosePromptProps) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#00000040]">
      <div className="w-[476px] h-[486px] rounded-[16px] bg-white p-[60px]">
        <div className="w-[356px] h-[366px] flex flex-col items-center">
          <div className="w-[356px] h-[268px] flex flex-col items-center gap-[24px]">
            <img
              src={USER_ICON}
              alt="Profile icon"
              className="w-[94px] h-[94px]"
            />
            <div className="w-[356px] h-[150px] flex flex-col items-center gap-[24px]">
              <h2 className="w-[356px] h-[78px] text-center text-[32px] leading-[100%] tracking-[0] font-[600] text-[#3D3D3D]">
                Complete your profile to continue
              </h2>
              <p className="w-[356px] h-[48px] text-center text-[20px] leading-[100%] tracking-[0] font-[500] text-[#3D3D3D]">
                You need to complete your profile before enrolling in this
                course.
              </p>
            </div>
          </div>
          <div className="mt-[40px] flex w-[356px] h-[58px] items-center gap-[8px]">
            <button
              type="button"
              onClick={onStay}
              className="flex w-[174px] h-[58px] items-center justify-center rounded-[8px] border-2 border-[#958FEF] bg-white px-[16px] py-[12px]"
            >
              <span className="inline-flex w-[128px] h-[24px] items-center justify-center text-center text-[16px] leading-[24px] font-[500] tracking-[0] text-[#4F46E5]">
                Complete Profile
              </span>
            </button>
            <button
              type="button"
              onClick={onCloseAnyway}
              className="flex w-[174px] h-[58px] items-center justify-center rounded-[8px] bg-[#4F46E5] px-[25px] py-[17px]"
            >
              <span className="inline-flex w-[53px] h-[24px] items-center justify-center text-center text-[16px] leading-[24px] font-[500] tracking-[0] text-white">
                Cancel
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileClosePrompt;
