import ARROW_DOWN from "../../../../../assets/icons/courses/navigation/glyphs_arrow-bold.svg?react";
import TWO from "../../../../../assets/icons/courses/schedule-steps/Icon Set=Two.svg";
import type { TimeSlotOption } from "../../../../../types/courseDetail";
import TimeSlotOptionButton from "../options/TimeSlotOptionButton";

interface TimeSlotProps {
  options: TimeSlotOption[];
  selectedId: number | null;
  onSelect: (timeSlotId: number) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const TimeSlot = ({
  options,
  selectedId,
  onSelect,
  isOpen,
  onToggle,
}: TimeSlotProps) => {
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={onToggle}
        className="w-full h-[30px] flex flex-row justify-between items-center cursor-pointer"
      >
        <img src={TWO} alt="one icon" className="w-[28px] h-[28px]" />
        <div className="w-[457px] h-[30px] mx-[8px] text-left">
          <h2 className="text-[#130E67] font-[600] text-[24px] leading-[100%]">
            Time Slot
          </h2>
        </div>
        <ARROW_DOWN
          aria-hidden
          className={`w-[28px] h-[28px] text-[#130E67] transition-transform duration-300 ease-in-out [&_path]:stroke-current ${
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
          <div className="w-full h-[61px] flex flex-row justify-between gap-[6px]">
            {options.map((timeSlot) => (
              <TimeSlotOptionButton
                key={timeSlot.id}
                option={timeSlot}
                isSelected={selectedId === timeSlot.id}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSlot;


