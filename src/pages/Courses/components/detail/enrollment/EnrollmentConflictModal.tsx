import CourseFeedbackModalShell from "./CourseFeedbackModalShell";
import WARNING from "../../../../../assets/icons/modal/warning.svg";
type EnrollmentConflictModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const EnrollmentConflictModal = ({
  isOpen,
  onClose,
}: EnrollmentConflictModalProps) => {
  // Conflict feedback modal frame only; content is intentionally deferred.
  return (
    <CourseFeedbackModalShell
      isOpen={isOpen}
      onClose={onClose}
      width={476}
      height={471}
    >
      <div className="w-full h-full flex flex-col gap-[40px]">
        <div className="h-[277px] flex flex-col justify-start items-center text-center gap-[24px]">
          <img src={WARNING} alt="warning icon" className="w-[94px] h-[94px]" />
          <div className="w-[24px] w-full flex flex-col gap-[24px]">
            <h2 className="text-[#3D3D3D] font-[600] text-[32px] leading-[100%] w-[356px] h-[39px] ">
              Enrollment Conflict
            </h2>
            <p className="font-[500] text-[20px] leading-[100%] text-[#3D3D3D] w-[356px]">
              You are already enrolled in{" "}
              <span className="font-[700] text-[20px] leading-[24px]">
                “UX/UI Design Fundamentals”
              </span>{" "}
              with the same schedule: Wed-Fri at 12AM-2PM
            </p>
          </div>
        </div>
        <div className="w-full h-[58px] flex flex-row gap-[8px]">
          <button className="text-[#4F46E5] font-[500] leading-[24px] w-[174px] h-[58px] px-[16px] py-[12px] rounded-[8px] border-[2px] border-[#958FEF] ">
            Continue Anyway
          </button>
          <button className="w-[174px] h-[58px] bg-[#4F46E5] rounded-[8px] py-[17px] px-[25px] text-white font-[500] leading-[24px]">
            Cancel
          </button>
        </div>
      </div>
    </CourseFeedbackModalShell>
  );
};

export default EnrollmentConflictModal;
