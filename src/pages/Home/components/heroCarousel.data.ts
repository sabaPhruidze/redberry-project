import HERO_ONE_IMAGE from "../../../assets/images/home/hero_image.png";
import HERO_TWO_IMAGE from "../../../assets/images/home/second.png";
import HERO_THREE_IMAGE from "../../../assets/images/home/third.png";
import LEFT_GRAY_ICON from "../../../assets/icons/home/left_gray.svg";
import LEFT_WHITE_ICON from "../../../assets/icons/home/left_white.svg";
import RIGHT_GRAY_ICON from "../../../assets/icons/home/right_gray.svg";
import RIGHT_WHITE_ICON from "../../../assets/icons/home/right_white.svg";

export type HeroSlide = {
  title: string;
  description?: string;
  buttonText: string;
  titleHeightClass: string;
  buttonWidthClass: string;
  containerPaddingClass: string;
  image: string;
  leftArrowIcon: string;
  rightArrowIcon: string;
  activeIndicatorColor: string;
  inactiveIndicatorColor: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "Start learning something new today",
    description:
      "Explore a wide range of expert-led courses in design, development, business, and more. Find the skills you need to grow your career and learn at your own pace.",
    buttonText: "Browse Courses",
    titleHeightClass: "h-[58px]",
    buttonWidthClass: "w-[206px]",
    containerPaddingClass: "pt-[48px] px-[48px] pb-[48px]",
    image: HERO_ONE_IMAGE,
    leftArrowIcon: LEFT_GRAY_ICON,
    rightArrowIcon: RIGHT_WHITE_ICON,
    activeIndicatorColor: "#F5F5F5",
    inactiveIndicatorColor: "rgba(193, 188, 188, 0.5)",
  },
  {
    title: "Pick up where you left off",
    description:
      "Your learning journey is already in progress. Continue your enrolled courses, track your progress, and stay on track toward completing your goals.",
    buttonText: "Start Learning",
    titleHeightClass: "h-[58px]",
    buttonWidthClass: "w-[187px]",
    containerPaddingClass: "pt-[48px] px-[48px] pb-[48px]",
    image: HERO_TWO_IMAGE,
    leftArrowIcon: LEFT_WHITE_ICON,
    rightArrowIcon: RIGHT_WHITE_ICON,
    activeIndicatorColor: "#F5F5F5",
    inactiveIndicatorColor: "#ADADAD",
  },
  {
    title: "Learn together, grow faster",
    buttonText: "Learn More",
    titleHeightClass: "h-[99px]",
    buttonWidthClass: "w-[159px]",
    containerPaddingClass: "p-[48px]",
    image: HERO_THREE_IMAGE,
    leftArrowIcon: LEFT_WHITE_ICON,
    rightArrowIcon: RIGHT_GRAY_ICON,
    activeIndicatorColor: "#F5F5F5",
    inactiveIndicatorColor: "#ADADAD",
  },
];
