const TotalPrice = () => {
  return (
    <div className="w-[530px] h-[306px] p-[40px] border border-[#F5F5F5] rounded-[12px] bg-white">
      <div className="w-full h-[39px] flex flex-row justify-between items-center">
        <p className="font-[600] text-[20px] leading-[24px] text-[#8A8A8A] ">
          Total Price
        </p>
        <p className="text-[#292929] text-[32px] font-[600] leading-[100%]">
          $349
        </p>
      </div>
      <div className="w-[446px] h-[60px] flex flex-col gap-[12px] mt-[32px]">
        <div className="w-full h-[39px] flex flex-row justify-between items-center">
          <p className="font-[500] leading-[24px] text-[#8A8A8A] ">
            Base Price
          </p>
          <p className="text-[#292929] font-[500] leading-[24px]">+ $0</p>
        </div>
        <div className="w-full h-[39px] flex flex-row justify-between items-center">
          <p className="font-[500] leading-[24px] text-[#8A8A8A] ">
            Session Type
          </p>
          <p className="text-[#292929] font-[500] leading-[24px]">+ $0</p>
        </div>
      </div>
      <button className="mt-[32px] w-full h-[63px] bg-[#EEEDFC] rounded-[12px] text-[#B7B3F4] text-[20px] font-[600] text-center leading-[24px]">
        Enroll Now
      </button>
    </div>
  );
};

export default TotalPrice;
