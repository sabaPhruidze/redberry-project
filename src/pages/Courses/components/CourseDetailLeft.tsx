import BreadcrumbIndividual from "../components/BreadcrumbIndividual";
import MOCK_IMAGE from "../../../assets/images/home/mock_course_in_progress.png";

import HALF_STAR from "../../../assets/icons/home/Star (1).svg";
import EMPTY_STAR from "../../../assets/icons/home/Star (2).svg";
import STAR from "../../../assets/icons/home/Star.svg";

import INSTRUCTOR from "../../../assets/images/catalog/instructor.jpg";
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
        <h1 className="mt-[32px] text-[#141414] font-[600] text-[40px] leading-[100%] h-[48px]">
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
        <div>
          <div className="w-[179px] h-[46px] bg-white px-[12px] py-[8px] gap-[12px] rounded-[12px] flex flex-row">
            <img
              src={INSTRUCTOR}
              alt="instructor image"
              className="w-[30px] h-[30px] rounded-[4px] "
            />
            <p className="text-[#666666] font-[500] leading-[24px]">
              Marilyn Mango
            </p>
          </div>
          <div className="w-full">
            <h2 className="font-[600] text-[20px] leading-[24px] text-[#8A8A8A]">
              Course Description
            </h2>
            <p className="font-[500] leading-[24px] text-[#525252]">
              This course focuses on building scalable, production-level
              front-end applications using React and TypeScript. It covers
              advanced component architecture, strong typing strategies, state
              management patterns, and performance optimization techniques used
              in modern web products.
            </p>
            <br />
            <p className="font-[500] leading-[24px] text-[#525252]">
              Participants learn how to design reusable components, structure
              large codebases, and improve maintainability through strict typing
              and clear interfaces. The course also explores advanced hooks,
              custom hooks, API integration, error handling, and testing
              approaches commonly used in professional development environments.
              This course focuses on building scalable, production-level
              front-end applications using React and TypeScript. It covers
              advanced component architecture, strong typing strategies, state
              management patterns, and performance optimization techniques used
              in modern web products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailLeft;
