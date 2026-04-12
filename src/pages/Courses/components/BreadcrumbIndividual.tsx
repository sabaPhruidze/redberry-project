import RIGHT_ARROW from "../../../assets/icons/courses/right-arrow.svg";

const BreadcrumbIndividual = () => {
  return (
    <div className="h-[28px] flex flex-row items-center">
      <p className="font-[500] text-[18px] leading-[100%] text-[#666666]">
        Home
      </p>
      <img
        src={RIGHT_ARROW}
        alt="right arrow"
        className="w-[12px] h-[24px] ml-[4px] mr-[6px]"
      />
      <p className="font-[500] text-[18px] leading-[100%] text-[#666666]">
        Browse
      </p>
      <img
        src={RIGHT_ARROW}
        alt="right arrow"
        className="w-[12px] h-[24px] ml-[4px] mr-[6px]"
      />
      <p className=" text-[#736BEA] font-[500] text-[18px] leading-[100%]">
        Development
      </p>
    </div>
  );
};

export default BreadcrumbIndividual;
