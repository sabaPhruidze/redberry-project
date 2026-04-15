import RIGHT_ARROW from "../../../../../assets/icons/courses/navigation/right-arrow.svg";
import { Link } from "react-router-dom";
const BreadcrumbCatalog = () => {
  return (
    <div className="h-[28px] flex flex-row items-center">
      <Link
        to="/"
        className="font-[500] text-[18px] leading-[100%] text-[#666666]"
      >
        Home
      </Link>
      <img
        src={RIGHT_ARROW}
        alt="right arrow"
        className="w-[12px] h-[24px] ml-[4px] mr-[6px] mt-[2px]"
      />
      <p className="font-[500] text-[18px] leading-[100%] text-[#736BEA]">
        Browse
      </p>
    </div>
  );
};

export default BreadcrumbCatalog;
