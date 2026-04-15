import LOGO from "../../../assets/icons/header/Logo.svg";
import { SOCIAL_MEDIA } from "./footer.data";
import { Link } from "react-router-dom";
const FooterBrand = () => {
  return (
    <div>
      <div className="w-[174px] h-[45px] flex flex-row gap-[12px] items-center">
        <Link to="/">
          <img alt="logo" src={LOGO} className="w-[45px] h-[45px]" />
        </Link>
        <h2 className="text-[#130E67] font-[500] text-[24px] leading-[100%]">
          Bootcamp
        </h2>
      </div>
      <p className="font-[500] w-[250px] text-[14px] leading-[100%] text-[#130E67] mt-[16px] mb-[24px]">
        Your learning journey starts here! Browse courses to get started.
      </p>
      <div className="w-[177px] h-[19px] flex flex-row gap-[22px]">
        {SOCIAL_MEDIA.map((media) => (
          <img src={media.icon} key={media.id} alt={media.alt} />
        ))}
      </div>
    </div>
  );
};

export default FooterBrand;
