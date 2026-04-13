import type { TimeSlotOption } from "../../../types/courseDetail";
import {
  getTimeSlotDisplayRange,
  getTimeSlotDisplayTitle,
  getTimeSlotPeriod,
} from "./timeSlotOptionUtils";
import TimeSlotIcon from "./TimeSlotIcon";

interface TimeSlotOptionButtonProps {
  option: TimeSlotOption;
  isSelected: boolean;
  onSelect: (timeSlotId: number) => void;
}

const TimeSlotOptionButton = ({ option, isSelected, onSelect }: TimeSlotOptionButtonProps) => {
  const isUnavailable = option.isAvailable === false || option.available === false;
  const period = getTimeSlotPeriod(option);
  const title = getTimeSlotDisplayTitle(option);
  const timeRange = getTimeSlotDisplayRange(option);

  return (
    <button
      type="button"
      disabled={isUnavailable}
      aria-pressed={isSelected}
      onClick={() => onSelect(option.id)}
      className={`flex flex-row items-center justify-start gap-[12px] rounded-[12px] w-[172.67px] h-[61px] py-[15px] px-[19.8px] border ${
        isUnavailable
          ? "border-[#D1D1D1] bg-[#F5F5F5] cursor-not-allowed"
          : isSelected
            ? "border-[#958FEF] bg-[#DDDBFA] cursor-default"
            : "border-[#D1D1D1] bg-white cursor-pointer"
      }`}
    >
      <TimeSlotIcon period={period} isSelected={isSelected} isUnavailable={isUnavailable} />
      <div className="flex min-w-0 flex-col items-start gap-[2px] text-left">
        <h3
          className={`font-[500] text-[14px] leading-[100%] ${
            isUnavailable ? "text-[#D1D1D1]" : isSelected ? "text-[#4F46E5]" : "text-[#666666]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`font-[400] text-[10px] leading-[100%] ${
            isUnavailable ? "text-[#D1D1D1]" : isSelected ? "text-[#4F46E5]" : "text-[#666666]"
          }`}
        >
          {timeRange}
        </p>
      </div>
    </button>
  );
};

export default TimeSlotOptionButton;
