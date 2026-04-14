// Renders one catalog course card using real backend course fields.
// Maps backend category icon slugs to existing local category icons.
import { Link } from "react-router-dom";
import HALF_STAR from "../../../../../assets/icons/home/Star (1).svg";
import EMPTY_STAR from "../../../../../assets/icons/home/Star (2).svg";
import STAR from "../../../../../assets/icons/home/Star.svg";
import type { CourseCardItem } from "../../../../../types/courses";
import { getCategoryIconComponent } from "../filters/categoryIconMap";

type CatalogCourseCardProps = {
  course: CourseCardItem;
};

const getRatingIcon = (avgRating: number) => {
  if (!avgRating) {
    return EMPTY_STAR;
  }
  if (avgRating <= 4) {
    return HALF_STAR;
  }
  return STAR;
};

const CatalogCourseCard = ({ course }: CatalogCourseCardProps) => {
  const categoryName = course.category?.name ?? "";
  const CategoryIcon = getCategoryIconComponent(course.category?.icon ?? "");
  const ratingValue = Number(course.avgRating);
  const displayRating = Number.isFinite(ratingValue) ? ratingValue.toFixed(1) : "0";
  const ratingNumber = Number(displayRating);

  return (
    <Link
      to={`/courses/${course.id}`}
      className="flex w-[373px] h-[451px] flex-col rounded-[12px] border border-[#F5F5F5] bg-white p-[20px]"
    >
      <img src={course.image} alt={course.title} className="w-full h-[181px]" />
      <div className="mt-[18px] mb-[12px] flex flex-row justify-between w-full">
        <p className="leading-[100%] font-[500] text-[14px] text-[#ADADAD]">
          {course.instructor?.name ?? ""} | {course.durationWeeks ?? ""} Weeks
        </p>
        <div className="flex flex-row items-center gap-[4px]">
          <img src={getRatingIcon(ratingNumber)} alt="star icon" className="w-[18px] h-[18px]" />
          <p className="font-[500] text-[14px] leading-[100%] text-redberry-text-gray-light">
            {displayRating}
          </p>
        </div>
      </div>
      <h2 className="mb-[18px] w-full leading-[100%] font-[600] text-[24px] text-[#0A0A0A]">
        {course.title}
      </h2>
      <div className="mb-[18px] inline-flex self-start items-center gap-[6px] rounded-[12px] bg-[#F5F5F5] px-[12px] py-[8px]">
        {CategoryIcon ? (
          <CategoryIcon
            aria-hidden
            className="h-[18px] w-[18px] [&_path]:fill-current text-[#525252]"
          />
        ) : null}
        <h4 className="whitespace-nowrap text-[#525252] font-[500] leading-[24px]">
          {categoryName}
        </h4>
      </div>
      <div className="mt-auto flex flex-row w-full h-[48px] justify-between items-center">
        <div className="w-[167px] h-full flex flex-col">
          <p className="w-[76px] h-[15px] font-[500] text-[12px] leading-none text-[#999999]">
            Starting from
          </p>
          <p className="h-[29px] font-[600] text-[24px] leading-[100%] text-[#3D3D3D]">
            ${Number(course.basePrice)}
          </p>
        </div>
        <div className="w-[103px] h-[48px] py-[12px] rounded-[8px] bg-redberry-text-purple flex items-center justify-center">
          <p className="text-[#F5F5F5] font-[500]">Details</p>
        </div>
      </div>
    </Link>
  );
};

export default CatalogCourseCard;


