import HALF_STAR from "../../../../../assets/icons/home/Star (1).svg";
import EMPTY_STAR from "../../../../../assets/icons/home/Star (2).svg";
import STAR from "../../../../../assets/icons/home/Star.svg";
import CALENDAR from "../../../../../assets/icons/courses/boxicons_calendar.svg";
import TIME from "../../../../../assets/icons/courses/tabler_clock-hour-3.svg";
import BUSINESS_ICON from "../../../../../assets/icons/courses/Icon Set=Business.svg?react";
import DATA_SCIENCE_ICON from "../../../../../assets/icons/courses/Icon Set=Data Science.svg?react";
import DESIGN_ICON from "../../../../../assets/icons/courses/Icon Set=Design.svg?react";
import DEVELOPMENT_ICON from "../../../../../assets/icons/courses/Icon Set=Development.svg?react";
import MARKETING_ICON from "../../../../../assets/icons/courses/Icon Set=Marketing.svg?react";

interface CourseDetailMetaRowProps {
  durationWeeks: number;
  categoryName: string;
  categoryIcon: string;
  topicName: string;
}

const getRatingIcon = (avgRating: number) => {
  if (!avgRating) return EMPTY_STAR;
  if (avgRating <= 4) return HALF_STAR;
  return STAR;
};

const getCategoryKind = (icon: string) =>
  icon.trim().toLowerCase().replaceAll("_", "-").replaceAll(" ", "-");

const CourseDetailMetaRow = ({
  durationWeeks,
  categoryName,
  categoryIcon,
  topicName,
}: CourseDetailMetaRowProps) => {
  const categoryKind = getCategoryKind(categoryIcon);
  const categoryLabel = topicName ? `${categoryName} / ${topicName}` : categoryName;
  const iconClassName = "w-[24px] h-[24px] [&_path]:fill-current text-[#525252]";

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
      <div className="inline-flex self-start h-fit bg-white py-[7.5px] px-[12px] gap-[10px] rounded-[12px]">
        {categoryKind === "development" ? <DEVELOPMENT_ICON aria-hidden className={iconClassName} /> : null}
        {categoryKind === "design" ? <DESIGN_ICON aria-hidden className={iconClassName} /> : null}
        {categoryKind === "business" ? <BUSINESS_ICON aria-hidden className={iconClassName} /> : null}
        {categoryKind === "marketing" ? <MARKETING_ICON aria-hidden className={iconClassName} /> : null}
        {categoryKind === "data-science" ? <DATA_SCIENCE_ICON aria-hidden className={iconClassName} /> : null}
        <p className="font-[500] text-[#666666] leading-[24px]">{categoryLabel}</p>
      </div>
    </div>
  );
};

export default CourseDetailMetaRow;


