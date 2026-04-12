import WeeklySchedule from "./WeeklySchedule";
import THREE from "../../../assets/icons/courses/Icon Set=Three.svg";
import DESKTOP from "../../../assets/icons/courses/Icon Set=Desktop.svg";

import TimeSlot from "./TimeSlot";

const CourseDetailRight = () => {
  return (
    <div className="mt-[130px] w-[530px] flex flex-col gap-[32px]">
      <WeeklySchedule />
      <TimeSlot />
      <div id="session-type"></div>
      <div id="total-price"></div>
    </div>
  );
};

export default CourseDetailRight;
