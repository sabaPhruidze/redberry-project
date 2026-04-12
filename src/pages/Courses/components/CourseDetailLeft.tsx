import BreadcrumbIndividual from "../components/BreadcrumbIndividual";
import MOCK_IMAGE from "../../../assets/images/home/mock_course_in_progress.png";

import HALF_STAR from "../../../assets/icons/home/Star (1).svg";
import EMPTY_STAR from "../../../assets/icons/home/Star (2).svg";
import STAR from "../../../assets/icons/home/Star.svg";

import CALENDAR from "../../../assets/icons/courses/boxicons_calendar.svg";
import TIME from "../../../assets/icons/courses/tabler_clock-hour-3.svg";
import DEVELOPMENT from "../../../assets/icons/courses/Icon Set=Development.svg";
const CourseDetailLeft = () => {
  const getRatingIcon = (avgRating: number) => {
    if (!avgRating) {
      return EMPTY_STAR;
    }
    if (avgRating <= 4) {
      return HALF_STAR;
    }
    return STAR;
  };
  return (
    <div id="left" className="w-[903px]">
      <div className="w-full">
        <BreadcrumbIndividual />
        <h1 className="mt-[32px] text-[#141414] font-[600] text-[40px] leading-[100%]">
          Advanced React & TypeScript Development
        </h1>
      </div>
      <div className="w-full mt-[24px]">
        <img src={MOCK_IMAGE} alt="Mock image" className="w-full fill" />
        <div className="mt-[16px] mb-[18px] flex flex-row justify-between w-full h-[39px] items-center">
          <div className=" flex flex-row justify-between w-[727px] h-[26px]">
            <div className="w-[200px] h-[24px] flex flex-row justify-between items-center">
              <div className="w-[92px] h-[24px] flex flex-row justify-between items-center">
                <img
                  src={CALENDAR}
                  alt="calendar icon"
                  className="w-[24px] h-[24px]"
                />
                <p className="leading-[100%] font-[500] text-[14px] text-[#525252]">
                  12 Weeks
                </p>
              </div>
              <div className="w-[96px] h-[24px] flex flex-row justify-between items-center">
                <img src={TIME} alt="Time icon" className="w-[24px] h-[24px]" />
                <p className="leading-[100%] font-[500] text-[14px] text-[#525252]">
                  128 Hours
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[4px]">
              <img
                src={getRatingIcon(4.9)}
                alt="star icon"
                className="w-[26px] h-[26px]"
              />
              <p className="font-[500] text-[14px] leading-[100%] text-redberry-text-gray-light">
                4.9
              </p>
            </div>
          </div>
          <div className="flex flex-row h-[39px] bg-white py-[7.5px] px-[12px] gap-[10px] rounded-[12px]">
            <img
              src={DEVELOPMENT}
              alt="development icon"
              className="w-[24px] h-[24px]"
            />
            <p className="font-[500] text-[#666666] leading-[24px]">
              Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailLeft;
