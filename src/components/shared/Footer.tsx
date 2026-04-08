import LOGO from "../../assets/icons/header/Logo.svg";
import FB from "../../assets/icons/footer/social_media/Facebook.svg";
import TWITTER from "../../assets/icons/footer/social_media/Twitter.svg";
import INSTAGRAM from "../../assets/icons/footer/social_media/Instagram.svg";
import LINKEDIN from "../../assets/icons/footer/social_media/LinkedIn.svg";
import YOUTUBE from "../../assets/icons/footer/social_media/YouTube.svg";

import EMAIL from "../../assets/icons/footer/contact/email.svg";
import LOCATION from "../../assets/icons/footer/contact/location.svg";
import PHONE from "../../assets/icons/footer/contact/phone.svg";
import { useProtectedAction } from "../../features/auth/hooks/useProtectedAction";

const isProtectedFooterLink = (link: string) =>
  link === "Enrolled Courses" || link === "My Profile";

const Footer = () => {
  const { handleProtectedAction } = useProtectedAction();

  const social_media: {
    id: number;
    icon: string;
    alt: string;
  }[] = [
    {
      id: 0,
      icon: FB,
      alt: "facebook icon",
    },
    {
      id: 1,
      icon: TWITTER,
      alt: "twitter icon",
    },
    {
      id: 2,
      icon: INSTAGRAM,
      alt: "instagram icon",
    },
    {
      id: 3,
      icon: LINKEDIN,
      alt: "linkedin icon",
    },
    {
      id: 4,
      icon: YOUTUBE,
      alt: "youtube icon",
    },
  ];

  const additional: {
    id: number;
    title: string;
    link: string[];
    icons?: {
      alt: string;
      img: string;
      classname: string;
    }[];
  }[] = [
    {
      id: 0,
      title: "Explore",
      link: ["Enrolled Courses", "Browse Courses"],
    },
    {
      id: 1,
      title: "Account",
      link: ["My Profile"],
    },
    {
      id: 2,
      title: "Contact",
      link: [
        "contact@company.com",
        "(+995) 555 111 222",
        "Aghmashenebeli St.115",
      ],

      icons: [
        { alt: "email icon", img: EMAIL, classname: "w-[24px] h-[24px]" },
        { alt: "phone icon", img: PHONE, classname: "w-[22px] h-[22px]" },
        { alt: "location icon", img: LOCATION, classname: "w-[24px] h-[24px]" },
      ],
    },
  ];

  return (
    <footer className="w-full h-[334px]">
      <div className="w-full px-[167px] h-full">
        <div className="w-full pt-[80px] h-[218px] flex flex-row justify-between mb-[74px]">
          <div id="left">
            <div className="w-[174px] h-[45px] flex flex-row gap-[12px] items-center">
              <img src={LOGO} alt="logo" className="w-[45px] h-[45px]" />
              <h2 className="text-[#130E67] font-[500] text-[24px] leading-[100%]">
                Bootcamp
              </h2>
            </div>
            <p className="font-[500] w-[250px] text-[14px] leading-[100%] text-[#130E67] mt-[16px] mb-[24px]">
              Your learning journey starts here! Browse courses to get started.
            </p>
            <div className="w-[177px] h-[19px] flex flex-row gap-[22px]">
              {social_media.map((media) => (
                <img src={media.icon} key={media.id} alt={media.alt} />
              ))}
            </div>
          </div>
          <div
            id="right"
            className="w-[700px] h-[130px] flex flex-row justify-between"
          >
            {additional.map((item) => (
              <div key={item.id}>
                <h3 className="mb-[16px] font-[600] text-[20px] leading-[24px] text-[#130E67]">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-[6px]">
                  {item.link.map((link, index) => (
                    <div
                      key={`${item.id}-${link}`}
                      className="w-full flex items-center gap-[8px]"
                    >
                      {item.icons?.[index] && (
                        <img
                          src={item.icons[index].img}
                          alt={item.icons[index].alt}
                          className={item.icons[index].classname}
                        />
                      )}
                      {isProtectedFooterLink(link) ? (
                        <button
                          type="button"
                          onClick={() => handleProtectedAction()}
                          className="w-full text-left font-[400] text-[18px] leading-[100%] text-[#666666]"
                        >
                          {link}
                        </button>
                      ) : (
                        <p className="w-full block font-[400] text-[18px] leading-[100%] text-[#666666]">
                          {link}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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
      </div>
    </footer>
  );
};

export default Footer;
