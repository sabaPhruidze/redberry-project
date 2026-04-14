import CourseFeedbackModalShell from "./CourseFeedbackModalShell";
import CONFIRMED from "../../../../../../assets/icons/modal/confirmed.svg";

type EnrollmentConfirmedModalProps = {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
};

const EnrollmentConfirmedModal = ({
  isOpen,
  onClose,
  courseTitle,
}: EnrollmentConfirmedModalProps) => {
  // Enrollment confirmed modal with exact right-panel spacing and dynamic course title.
  return (
    <CourseFeedbackModalShell
      isOpen={isOpen}
      onClose={onClose}
      width={476}
      height={471}
    >
      <div className="h-[351px] w-[356px] flex flex-col gap-[42px]">
        <div className="w-[356px] flex flex-col items-center text-center gap-[24px]">
          <img
            src={CONFIRMED}
            alt="confirmed icon"
            className="h-[94px] w-[94px]"
          />
          <div className="w-[356px] flex flex-col gap-[24px]">
            <h2 className="h-[39px] w-[356px] text-center text-[32px] font-[600] leading-[100%] text-[#3D3D3D]">
              Enrollment Confirmed!
            </h2>
            <p className="w-[356px] h-[72px] text-center text-[20px] font-[500] leading-[100%] text-[#3D3D3D]">
              You've successfully enrolled to the{" "}
              <span className=" text-[20px] font-[700] leading-[24px] text-[#3D3D3D]">
                &ldquo;{courseTitle}&rdquo;
              </span>{" "}
              Course!
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-[58px] w-[356px] items-center justify-center gap-[10px] rounded-[8px] bg-[#4F46E5] px-[25px] py-[17px] text-[16px] font-[500] leading-[24px] text-white"
        >
          Done
        </button>
      </div>
    </CourseFeedbackModalShell>
  );
};

export default EnrollmentConfirmedModal;
