import STAR from "../../../assets/icons/home/Star.svg";
import OutlineButton from "../../../components/ui/OutlineButton";
import type { MockInProgressCoursesResponse } from "../../../types/courses";

interface Props {
  course: MockInProgressCoursesResponse["data"][number];
}

const ContinueLearningCard = ({ course }: Props) => {
  const progress = Math.max(course.progress, 0);

  return (
    <div className="w-[506px] h-[219px] rounded-[12px] border-[0.5px] border-[#F5F5F5] p-[20px] bg-white blur-[20px]">
      <div className="w-[466px] h-[123px] flex flex-row justify-between">
        <img
          src={course.course.image}
          alt={course.course.title}
          className="w-[140px] h-full rounded-[12px]"
        />
        <div className="pl-[16px] pr-[4px] w-full h-full">
          <div className="flex flex-row justify-between h-[18px] w-full">
            <p className="leading-[100%] w-[159px] h-[17px] font-[500] text-[14px] text-[#8A8A8A]">
              {course.course.instructor.name}
            </p>
            <div className="flex flex-row items-center gap-[4px]">
              <img src={STAR} alt="star icon" className="w-[18px] h-[18px]" />
              <p className="font-[500] text-[14px] leading-[100%] text-redberry-text-gray-light">
                {course.course.avgRating || 0}
              </p>
            </div>
          </div>
          <h2 className="mt-[9px] w-full h-[48px] font-[600] text-[20px] leading-[24px] text-[#141414]">
            {course.course.title}
          </h2>
        </div>
      </div>
      <div className="mt-[8px] w-[466px] h-[48px] flex flex-row items-end justify-between">
        <div className="w-[336px] h-[39.3px] mt-[8.7px]">
          <p className="text-[12px] leading-[100%] font-[500] text-[#141414]">
            {progress}% Complete
          </p>
          <div className="mt-[8px] h-[15.13px] w-full rounded-[30px] bg-[#DDDBFA]">
            <div
              className="h-full rounded-[30px] bg-redberry-text-purple"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <OutlineButton
          text="View"
          classname="w-[90px] h-[48px] leading-[24px] text-[16px]"
        />
      </div>
    </div>
  );
};

export default ContinueLearningCard;
