import type { WeeklyScheduleOption } from "../../../../../types/courseDetail";

interface WeeklyScheduleOptionButtonProps {
  option: WeeklyScheduleOption;
  isSelected: boolean;
  isUnavailable: boolean;
  onSelect: (weeklyScheduleId: number) => void;
}

const WeeklyScheduleOptionButton = ({
  option,
  isSelected,
  isUnavailable,
  onSelect,
}: WeeklyScheduleOptionButtonProps) => {
  return (
    <button
      type="button"
      disabled={isUnavailable}
      aria-pressed={isSelected}
      onClick={() => onSelect(option.id)}
      className={`w-[123.5px] h-[91px] rounded-[12px] border px-[10px] py-[36px] ${
        isUnavailable
          ? "border-[#D1D1D1] bg-[#F5F5F5] cursor-not-allowed"
          : isSelected
            ? "border-[#958FEF] bg-[#DDDBFA] cursor-default"
            : "border-[#D1D1D1] bg-white cursor-pointer"
      }`}
    >
      <p
        className={`w-[103.5px] h-[19px] text-center font-[600] leading-[100%] ${
          isUnavailable
            ? "text-[#D1D1D1]"
            : isSelected
              ? "text-[#4F46E5]"
              : "text-[#292929]"
        }`}
      >
        {option.label}
      </p>
    </button>
  );
};

export default WeeklyScheduleOptionButton;


