import HERO from "../../../assets/images/home/hero_image.png";
import Button from "../../../components/ui/Button";
import RECTANGLE_GRAY from "../../../assets/icons/home/Rectangle_gray.svg";
import REACTANGLE_WHITE from "../../../assets/icons/home/Rectangle_white.svg";
import ARROW_LEFT from "../../../assets/icons/home/Arrowleft (1).svg";
import ARROW_RIGHT from "../../../assets/icons/home/Carousel_nav (1).svg";
const HeroSection = () => {
  return (
    <section className="w-[1920px] px-[177px] py-[64px]">
      <div
        className="relative text-white w-[1566px] h-[420px] rounded-[30px] p-[48px] flex flex-col gap-[12px]  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO})` }}
      >
        <div>
          <h1 className=" leading-[100%] text-[48px] font-bold h-[58px] ">
            Start learning something new today
          </h1>
          <p className="mt-[12px] mb-[40px] font-light text-[24px] ">
            Explore a wide range of expert-led courses in design, development,
            business, and more. Find the skills you need to grow your career and
            learn at your own pace.
          </p>
          <Button text="Browse Courses" classname="w-[206px] h-[64px]" />
          <div className="flex fle-row justify-center  mt-[31px]">
            <div className="w-[1206px] h-[54px] flex items-center gap-[12px] justify-center">
              <img
                src={REACTANGLE_WHITE}
                alt="rectangle white"
                className="w-[57px] h-[8px]"
              />
              <img
                src={RECTANGLE_GRAY}
                alt="rectangle gray"
                className="w-[57px] h-[8px]"
              />
              <img
                src={RECTANGLE_GRAY}
                alt="rectangle gray"
                className="w-[57px] h-[8px]"
              />
            </div>
            <div className="w-[132px] h-[54px] flex flex-row gap-[24px] absolute  right-[48px] bottom-[40px]">
              <img
                src={ARROW_LEFT}
                alt="arrow left"
                className="w-[54px] h-[54px]"
              />
              <img
                src={ARROW_RIGHT}
                alt="arrow right"
                className="w-[54px] h-[54px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
