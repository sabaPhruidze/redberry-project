import { useState } from "react";
import ONE from "../../../assets/icons/courses/Icon Set=One.svg";
import ARROW_DOWN from "../../../assets/icons/courses/glyphs_arrow-bold.svg?react";
const WeeklySchedule = () => {
  const dates = ["Mon - Wed", "Tue - Thu", "Wed - Fri", "Weekend"];
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div className="w-[full] h-[138px]">
      <div className="w-full h-[30px] flex flex-row justify-between items-center">
        <img src={ONE} alt="one icon" className="w-[28px] h-[28px]" />
        <div className="w-[457px] h-[30px] ml-[8px] mr-[7px] text-left">
          <h2 className="text-[#130E67] font-[600] text-[24px] leading-[100%]">
            Weekly Schedule
          </h2>
        </div>
        <ARROW_DOWN
          aria-hidden
          className="w-[28px] h-[28px] [&_path]:stroke-current text-[#130E67]"
        />
      </div>
      <div className="mt-[18px] w-[530px] h-[91px] flex flex-row gap-[12px] justify-between">
        {dates.map((date) => (
          <button
            key={date}
            type="button"
            aria-pressed={selectedDate === date}
            onClick={() => setSelectedDate(date)}
            className={`w-[123.5px] h-[91px] rounded-[12px] border px-[10px] py-[36px] ${
              selectedDate === date
                ? "border-[#958FEF] bg-[#DDDBFA]"
                : "border-[#D1D1D1] bg-white"
            }`}
          >
            <p
              className={`text-center font-[600] leading-[100%] ${
                selectedDate === date ? "text-[#4F46E5]" : "text-[#292929]"
              }`}
            >
              {date}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeeklySchedule;
