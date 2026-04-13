import HALF_STAR from "../../../../../assets/icons/home/Star (1).svg";
import EMPTY_STAR from "../../../../../assets/icons/home/Star (2).svg";
import STAR from "../../../../../assets/icons/home/Star.svg";
import CALENDAR from "../../../../../assets/icons/courses/boxicons_calendar.svg";
import TIME from "../../../../../assets/icons/courses/tabler_clock-hour-3.svg";
import CourseDetailCategoryBadge from "./CourseDetailCategoryBadge";

interface CourseDetailMetaRowProps {
  durationWeeks: number;
  categoryName: string;
  categoryIcon: string;
}

const getRatingIcon = (avgRating: number) => {
  if (!avgRating) return EMPTY_STAR;
  if (avgRating <= 4) return HALF_STAR;
  return STAR;
};

const CourseDetailMetaRow = ({
  durationWeeks,
  categoryName,
  categoryIcon,
}: CourseDetailMetaRowProps) => {
  return (
    <div className="mt-[16px] mb-[18px] flex flex-row justify-between w-full h-[39px] items-center">
      <div className="flex flex-row justify-between w-[727px] h-[26px]">
        <div className="w-[200px] h-[24px] flex flex-row justify-between items-center">
          <div className="w-[92px] h-[24px] flex flex-row justify-between items-center">
            <img src={CALENDAR} alt="calendar icon" className="w-[24px] h-[24px]" />
            <p className="leading-[100%] font-[500] text-[14px] text-[#525252]">{durationWeeks} Weeks</p>
          </div>
          <div className="w-[96px] h-[24px] flex flex-row justify-between items-center">
            <img src={TIME} alt="Time icon" className="w-[24px] h-[24px]" />
            <p className="leading-[100%] font-[500] text-[14px] text-[#525252]">128 Hours</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[4px]">
          <img src={getRatingIcon(4.9)} alt="star icon" className="w-[26px] h-[26px]" />
          <p className="font-[500] text-[14px] leading-[100%] text-redberry-text-gray-light">4.9</p>
        </div>
      </div>
      <CourseDetailCategoryBadge categoryName={categoryName} categoryIcon={categoryIcon} />
    </div>
  );
};

export default CourseDetailMetaRow;


