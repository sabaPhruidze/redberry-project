import ONE from "../../../../../assets/icons/courses/Icon Set=One.svg";
import ARROW_DOWN from "../../../../../assets/icons/courses/glyphs_arrow-bold.svg?react";
import type { WeeklyScheduleOption } from "../../../../../types/courseDetail";
import WeeklyScheduleOptionButton from "../options/WeeklyScheduleOptionButton";

interface WeeklyScheduleProps {
  options: WeeklyScheduleOption[];
  selectedId: number | null;
  onSelect: (weeklyScheduleId: number) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const WeeklySchedule = ({
  options,
  selectedId,
  onSelect,
  isOpen,
  onToggle,
}: WeeklyScheduleProps) => {
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={onToggle}
        className="w-full h-[30px] flex flex-row justify-between items-center cursor-pointer"
      >
        <img src={ONE} alt="one icon" className="w-[28px] h-[28px]" />
        <div className="w-[457px] h-[30px] ml-[8px] mr-[7px] text-left">
          <h2 className="text-[#130E67] font-[600] text-[24px] leading-[100%]">
            Weekly Schedule
          </h2>
        </div>
        <ARROW_DOWN
          aria-hidden
          className={`w-[28px] h-[28px] transition-transform duration-300 ease-in-out [&_path]:stroke-[#130E67] ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin-top] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-[18px]" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="w-[530px] h-[91px] flex flex-row gap-[12px] justify-between">
            {options.map((option) => (
              <WeeklyScheduleOptionButton
                key={option.id}
                option={option}
                isSelected={selectedId === option.id}
                isUnavailable={option.isAvailable === false || option.available === false}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySchedule;


