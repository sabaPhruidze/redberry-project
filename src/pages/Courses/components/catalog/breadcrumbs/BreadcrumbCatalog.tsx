import RIGHT_ARROW from "../../../../../assets/icons/courses/right-arrow.svg";

const BreadcrumbCatalog = () => {
  return (
    <div className="w-[149px] h-[28px] flex flex-row items-center">
      <p className="font-[500] text-[18px] leading-[100%] text-[#666666]">
        Home
      </p>
      <img
        src={RIGHT_ARROW}
        alt="right arrow"
        className="w-[12px] h-[24px] ml-[4px] mr-[6px]"
      />
      <p className=" text-[#736BEA] font-[500] text-[18px] leading-[100%]">
        Browse
      </p>
    </div>
  );
};

export default BreadcrumbCatalog;


