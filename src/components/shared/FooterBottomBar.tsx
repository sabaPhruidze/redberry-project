const FooterBottomBar = () => {
  return (
    <div className="w-full h-[22px] flex flex-row justify-between">
      <p className="font-[400] text-[18px] text-[#666666] leading-[100%]">
        Copyright © 2026 Redberry International
      </p>
      <div className="flex flex-row items-center gap-[5px]">
        <p className="text-[#666666] text-[18px] font-[400] leading-[100%]">
          All Rights Reserved
        </p>
        <p> | </p>
        <p className="text-[#4F46E5] text-[18px] font-[400] leading-[100%]">
          Terms and Conditions
        </p>
        <p> | </p>
        <p className="text-[#4F46E5] text-[18px] font-[400] leading-[100%]">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default FooterBottomBar;
