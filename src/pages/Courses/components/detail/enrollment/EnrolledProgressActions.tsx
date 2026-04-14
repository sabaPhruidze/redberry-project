import CHECK_ICON from "../../../../../assets/icons/profile/Icon Set=Check.svg?react";
import RETAKE_ICON from "../../../../../assets/icons/Icon Set=Retake.svg?react";

type EnrolledProgressActionsProps = {
  progress?: number | null;
  isCompleted?: boolean;
  isActionPending?: boolean;
  onCompleteCourse?: () => void;
  onRetakeCourse?: () => void;
};

const EnrolledProgressActions = ({
  progress,
  isCompleted = false,
  isActionPending = false,
  onCompleteCourse,
  onRetakeCourse,
}: EnrolledProgressActionsProps) => {
  const numericProgress = Number(progress);
  const clampedProgress = Number.isFinite(numericProgress)
    ? Math.min(100, Math.max(0, numericProgress))
    : 0;
  const displayProgress = isCompleted ? 100 : clampedProgress;
  const progressTextValue = Number.isInteger(clampedProgress)
    ? displayProgress.toString()
    : displayProgress.toFixed(1).replace(/\.0$/, "");
  const actionText = isCompleted ? "Retake Course" : "Complete Course";
  const ActionIcon = isCompleted ? RETAKE_ICON : CHECK_ICON;
  const handleAction = isCompleted ? onRetakeCourse : onCompleteCourse;

  return (
    <div className="flex w-[473px] flex-col gap-[40px]">
      <div className="flex w-[473px] flex-col gap-[12px]">
        <p className="h-[30.4px] w-[473px] text-[20px] font-[600] leading-[24px] tracking-[0] text-[#666666]">
          {progressTextValue}% Complete
        </p>
        <div className="h-[23.4px] w-[473px] overflow-hidden rounded-[30px] bg-[#DDDBFA]">
          <div
            className="h-[23.4px] rounded-[30px] bg-[#4F46E5]"
            style={{ width: `${displayProgress}%` }}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={handleAction}
        disabled={isActionPending}
        className="w-[full] h-[58px] flex w-full items-center justify-center gap-[10px] rounded-[8px] bg-[#4F46E5] px-[25px] py-[17px] text-white"
      >
        <span className="inline-flex h-[24px] items-center justify-center text-center text-[20px] font-[500] leading-[100%] tracking-[0]">
          {actionText}
        </span>
        <ActionIcon
          aria-hidden="true"
          focusable="false"
          className="h-[24px] w-[24px] [&_path]:!fill-white [&_path]:!stroke-white"
        />
      </button>
    </div>
  );
};

export default EnrolledProgressActions;
