// Temporary filled-state card slot until real enrolled course items are implemented.
import IMAGE from "../../../assets/images/home/mock_course_in_progress.png";
import CALENDAR_ICON from "../../../assets/icons/courses/boxicons_calendar.svg";
import CLOCK_ICON from "../../../assets/icons/courses/tabler_clock-hour-3.svg";
import LOCATION_ICON from "../../../assets/icons/courses/location.svg";
import USERS from "../../../assets/icons/courses/Icon Set=Users.svg";
import STAR from "../../../assets/icons/home/Star.svg";
import EnrolledCourseProgress from "./EnrolledCourseProgress";
const EnrolledCoursesFilledPlaceholder = () => {
  return (
    <div className="w-[623px] h-[295px] rounded-[12px] p-[20px] bg-white flex flex-col gap-[16px]">
      <div className="w-full h-[191px] flex flex-row gap-[18px]">
        <img
          src={IMAGE}
          alt="image"
          className="w-[269px] h-[191px] rounded-[10px] "
        />
        <div>
          <div className="flex flex-row justify-between h-[18px] w-full">
            <p className="leading-[100%]  h-[17px] font-[500] text-[14px] text-[#8A8A8A]">
              Instructor Sarah Johnson
            </p>
            <div className="flex flex-row items-center gap-[4px]">
              <img src={STAR} alt="star icon" className="w-[18px] h-[18px]" />
              <p className="font-[500] text-[14px] leading-[100%] text-redberry-text-gray-light">
                4.5
              </p>
            </div>
          </div>
          <h2 className="mt-[8px] w-full h-[48px] font-[600] text-[20px] leading-[24px] text-[#141414]">
            Advanced React & TypeScript Development
          </h2>
          <div className="w-full h-[104px] flex flex-col gap-[0px] mt-[8px]">
            <div className="w-full h-[26px] gap-[8px] flex flex-row items-center justify-start">
              <img
                src={CALENDAR_ICON}
                alt="calendar icon"
                className="w-[16px] h-[16px]"
              />
              <p className="w-full h-[26px] font-[400] text-[14px] text-[#666666] leading-[26px]">
                Monday-Wednesday
              </p>
            </div>
            <div className="w-full h-[26px] gap-[8px] flex flex-row items-center justify-start">
              <img
                src={CLOCK_ICON}
                alt="calendar icon"
                className="w-[16px] h-[16px]"
              />
              <p className="w-full h-[26px] font-[400] text-[14px] text-[#666666] leading-[26px]">
                Evening 6:00 PM - 8:00 PM
              </p>
            </div>
            <div className="w-full h-[26px] gap-[8px] flex flex-row items-center justify-start">
              <img
                src={USERS}
                alt="calendar icon"
                className="w-[16px] h-[16px]"
              />
              <p className="w-full h-[26px] font-[400] text-[14px] text-[#666666] leading-[26px]">
                In Person
              </p>
            </div>
            <div className="w-full h-[26px] gap-[8px] flex flex-row items-center justify-start">
              <img
                src={LOCATION_ICON}
                alt="calendar icon"
                className="w-[16px] h-[16px]"
              />
              <p className="w-full h-[26px] font-[400] text-[14px] text-[#666666] leading-[26px]">
                Tbilisi, Chavchavadze St.30
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[48px] flex flex-row gap-[20px] items-center justify-between">
        <div className="flex flex-col w-[446px] h-[39px] gap-[8px]">
          <p className="text-[#141414] font-[500] leading-[24px]">
            65% Complete
          </p>
          <EnrolledCourseProgress value={65} />
        </div>
        <button className="text-[#4F46E5] font-[500] leading-[24px] w-[117px] h-[48px] border-[2px] border-[#958FEF] rounded-[8px] px-[16px] py-[12px] ">
          View
        </button>
      </div>
    </div>
  );
};

export default EnrolledCoursesFilledPlaceholder;
