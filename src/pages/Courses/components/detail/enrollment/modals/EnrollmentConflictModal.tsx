import CourseFeedbackModalShell from "./CourseFeedbackModalShell";
import WARNING from "../../../../../../assets/icons/modal/warning.svg";

type EnrollmentConflictModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  courseTitle: string;
  scheduleLabel: string;
};

const EnrollmentConflictModal = ({
  isOpen,
  onClose,
  onContinue,
  courseTitle,
  scheduleLabel,
}: EnrollmentConflictModalProps) => {
  // Conflict modal uses the dedicated feedback shell and real conflict actions.
  return (
    <CourseFeedbackModalShell
      isOpen={isOpen}
      onClose={onClose}
      width={476}
      height={495}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="mx-auto w-[356px] flex flex-col gap-[40px]">
          <div className="w-[356px] flex flex-col items-center text-center gap-[24px]">
            <img
              src={WARNING}
              alt="warning icon"
              className="h-[94px] w-[94px]"
            />
            <div className="w-[356px] flex flex-col gap-[24px]">
              <h2 className="h-[39px] w-[356px] text-center text-[32px] font-[600] leading-[100%] text-[#3D3D3D]">
                Enrollment Conflict
              </h2>
              <p className="w-[356px] h-[96px] text-center text-[20px] font-[500] leading-[100%] text-[#3D3D3D]">
                You are already enrolled in{" "}
                <span className="text-[20px] font-[600] leading-[24px] text-[#3D3D3D]">
                  &ldquo;{courseTitle}&rdquo;
                </span>{" "}
                with the same schedule: {scheduleLabel}
              </p>
            </div>
          </div>
          <div className="flex h-[58px] w-[356px] gap-[8px]">
            <button
              type="button"
              onClick={onContinue}
              className="flex h-[58px] w-[174px] items-center justify-center gap-[2px] rounded-[8px] border-[2px] border-[#958FEF] px-[16px] py-[12px] text-[16px] font-[500] leading-[24px] text-[#4F46E5]"
            >
              Continue Anyway
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-[58px] w-[174px] items-center justify-center gap-[10px] rounded-[8px] bg-[#4F46E5] px-[25px] py-[17px] text-[16px] font-[500] leading-[24px] text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </CourseFeedbackModalShell>
  );
};

export default EnrollmentConflictModal;
