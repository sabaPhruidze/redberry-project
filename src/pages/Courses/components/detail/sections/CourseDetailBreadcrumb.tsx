import { Link } from "react-router-dom";
import RIGHT_ARROW from "../../../../../assets/icons/courses/navigation/right-arrow.svg";

interface CourseDetailBreadcrumbProps {
  categoryName: string;
}

const CourseDetailBreadcrumb = ({ categoryName }: CourseDetailBreadcrumbProps) => {
  const safeCategoryName = categoryName.trim() || "Category";

  return (
    <div className="h-[28px] flex flex-row items-center">
      <Link to="/" className="font-[500] text-[18px] leading-[100%] text-[#666666]">
        Home
      </Link>
      <img
        src={RIGHT_ARROW}
        alt="right arrow"
        className="w-[12px] h-[24px] ml-[4px] mr-[6px]"
      />
      <Link
        to="/courses/catalog"
        className="font-[500] text-[18px] leading-[100%] text-[#666666]"
      >
        Browse
      </Link>
      <img
        src={RIGHT_ARROW}
        alt="right arrow"
        className="w-[12px] h-[24px] ml-[4px] mr-[6px]"
      />
      <p className="font-[500] text-[18px] leading-[100%] text-[#736BEA]">
        {safeCategoryName}
      </p>
    </div>
  );
};

export default CourseDetailBreadcrumb;
