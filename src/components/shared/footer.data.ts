import FB from "../../assets/icons/footer/social_media/Facebook.svg";
import TWITTER from "../../assets/icons/footer/social_media/Twitter.svg";
import INSTAGRAM from "../../assets/icons/footer/social_media/Instagram.svg";
import LINKEDIN from "../../assets/icons/footer/social_media/LinkedIn.svg";
import YOUTUBE from "../../assets/icons/footer/social_media/YouTube.svg";
import EMAIL from "../../assets/icons/footer/contact/email.svg";
import LOCATION from "../../assets/icons/footer/contact/location.svg";
import PHONE from "../../assets/icons/footer/contact/phone.svg";

export type FooterIconItem = {
  alt: string;
  img: string;
  classname: string;
};

export type FooterSection = {
  id: number;
  title: string;
  link: string[];
  icons?: FooterIconItem[];
};

export const SOCIAL_MEDIA = [
  { id: 0, icon: FB, alt: "facebook icon" },
  { id: 1, icon: TWITTER, alt: "twitter icon" },
  { id: 2, icon: INSTAGRAM, alt: "instagram icon" },
  { id: 3, icon: LINKEDIN, alt: "linkedin icon" },
  { id: 4, icon: YOUTUBE, alt: "youtube icon" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  { id: 0, title: "Explore", link: ["Enrolled Courses", "Browse Courses"] },
  { id: 1, title: "Account", link: ["My Profile"] },
  {
    id: 2,
    title: "Contact",
    link: ["contact@company.com", "(+995) 555 111 222", "Aghmashenebeli St.115"],
    icons: [
      { alt: "email icon", img: EMAIL, classname: "w-[24px] h-[24px]" },
      { alt: "phone icon", img: PHONE, classname: "w-[22px] h-[22px]" },
      { alt: "location icon", img: LOCATION, classname: "w-[24px] h-[24px]" },
    ],
  },
];
