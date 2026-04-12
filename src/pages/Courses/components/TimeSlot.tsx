import { useState } from "react";
import MOON from "../../../assets/icons/courses/Icon Set=Moon.svg?react";
import CLOUD_SUN from "../../../assets/icons/courses/Icon Set=CloudSun.svg?react";
import SUN from "../../../assets/icons/courses/Icon Set=Sun.svg?react";
import ARROW_DOWN from "../../../assets/icons/courses/glyphs_arrow-bold.svg?react";
import TWO from "../../../assets/icons/courses/Icon Set=Two.svg";

const TimeSlot = () => {
  const [selectedTimeId, setSelectedTimeId] = useState<number | null>(null);

  const times: {
    id: number;
    Icon: typeof MOON;
    dayTime: string;
    exactTime: string;
  }[] = [
    {
      id: 1,
      Icon: CLOUD_SUN,
      dayTime: "Morning",
      exactTime: "9:00 AM – 12:00 PM",
    },
    {
      id: 2,
      Icon: SUN,
      dayTime: "Afternoon",
      exactTime: "12:00 AM – 6:00 PM",
    },
    {
      id: 3,
      Icon: MOON,
      dayTime: "Evening",
      exactTime: "6:00 AM – 9:00 PM",
    },
  ];
  return (
    <div>
      <div className="w-full h-[30px] flex flex-row justify-between items-center">
        <img src={TWO} alt="one icon" className="w-[28px] h-[28px]" />
        <div className="w-[457px] h-[30px] mx-[8px] text-left">
          <h2 className="text-[#130E67] font-[600] text-[24px] leading-[100%]">
            Time Slot
          </h2>
        </div>
        <ARROW_DOWN
          aria-hidden
          className="w-[28px] h-[28px] [&_path]:stroke-current text-[#130E67]"
        />
      </div>
      <div className="w-full h-[61px] flex flex-row justify-between gap-[6px] mt-[18px]">
        {times.map((time) => {
          const { id, Icon, dayTime, exactTime } = time;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={selectedTimeId === id}
              onClick={() => setSelectedTimeId(id)}
              className={`flex flex-row justify-between items-center rounded-[12px] w-[172.67px] h-[61px] py-[15px] px-[19.8px] border ${
                selectedTimeId === id
                  ? "border-[#958FEF] bg-[#DDDBFA]"
                  : "border-[#D1D1D1] bg-white"
              }`}
            >
              <Icon
                aria-hidden
                className={`w-[26px] h-[26px] [&_path]:fill-current [&_path]:stroke-current ${
                  selectedTimeId === id ? "text-[#4F46E5]" : "text-[#525252]"
                }`}
              />
              <div className="flex flex-col gap-[2px]">
                <h3
                  className={`font-[500] text-[14px] leading-[100%] ${
                    selectedTimeId === id ? "text-[#4F46E5]" : "text-[#666666]"
                  }`}
                >
                  {dayTime}
                </h3>
                <p
                  className={`font-[400] text-[10px] leading-[100$] ${
                    selectedTimeId === id ? "text-[#4F46E5]" : "text-[#666666]"
                  }`}
                >
                  {exactTime}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSlot;
