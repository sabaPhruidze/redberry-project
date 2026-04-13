import type { TimeSlotOption } from "../../../../../types/courseDetail";
import MOON from "../../../../../assets/icons/courses/Icon Set=Moon.svg?react";
import CLOUD_SUN from "../../../../../assets/icons/courses/Icon Set=CloudSun.svg?react";
import SUN from "../../../../../assets/icons/courses/Icon Set=Sun.svg?react";
import {
  getTimeSlotDisplayRange,
  getTimeSlotDisplayTitle,
  getTimeSlotPeriod,
} from "../utils/timeSlotOptionUtils";

interface TimeSlotOptionButtonProps {
  option: TimeSlotOption;
  isSelected: boolean;
  onSelect: (timeSlotId: number) => void;
}

type TimeSlotPeriod = "morning" | "afternoon" | "evening";

interface TimeSlotIconProps {
  period: TimeSlotPeriod;
  isSelected: boolean;
  isUnavailable: boolean;
}

const TimeSlotIcon = ({ period, isSelected, isUnavailable }: TimeSlotIconProps) => {
  const iconClassName = `w-[26px] h-[26px] [&_path]:fill-current [&_path]:stroke-current ${
    isUnavailable
      ? "text-[#D1D1D1]"
      : isSelected
        ? "text-[#4F46E5]"
        : "text-[#525252]"
  }`;

  if (period === "morning") {
    return <CLOUD_SUN aria-hidden className={iconClassName} />;
  }
  if (period === "afternoon") {
    return <SUN aria-hidden className={iconClassName} />;
  }

  return <MOON aria-hidden className={iconClassName} />;
};

const TimeSlotOptionButton = ({ option, isSelected, onSelect }: TimeSlotOptionButtonProps) => {
  const isUnavailable = option.isAvailable === false || option.available === false;
  const period = getTimeSlotPeriod(option) as TimeSlotPeriod;
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


