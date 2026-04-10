import STAR from "../../../assets/icons/home/Star.svg";
import HALF_STAR from "../../../assets/icons/home/Star (1).svg";
import EMPTY_STAR from "../../../assets/icons/home/Star (2).svg";
import Button from "../../../components/ui/Button";
import type { Course } from "../../../types/courses";
import { useNavigate } from "react-router-dom";

type StartLearningCardProps = {
  course: Course;
};

const getRatingIcon = (avgRating: number | null) => {
  if (avgRating === null) {
    return EMPTY_STAR;
  }
  if (avgRating <= 4) {
    return HALF_STAR;
  }
  return STAR;
};

const StartLearningCard = ({ course }: StartLearningCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-[506px] h-[576px] p-[20px] rounded-[12px] bg-white">
      <img src={course.image} alt="course image" className="w-full h-[262px]" />
      <div className="mt-[16px] mb-[12px] flex flex-row justify-between h-[18px] w-full">
        <p className="leading-[100%] w-[159px] h-[17px] font-[500] text-[14px] text-[#8A8A8A]">
          {course.instructor.name}
        </p>
        <div className="flex flex-row items-center gap-[4px]">
          <img src={getRatingIcon(course.avgRating)} alt="star icon" className="w-[18px] h-[18px]" />
          <p className="font-[500] text-[14px] leading-[100%] text-redberry-text-gray-light">
            {course.avgRating || 0}
          </p>
        </div>
      </div>
      <h2 className="mb-[16px] w-full leading-[100%] font-[600] text-[24px] text-[#141414]">
        {course.title}
      </h2>
      <p className="mb-[24px] w-[412px] h-[96px] font-[500] text-[16px] text-[#666666]">
        {course.description}
      </p>
      <div className="flex flex-row w-full h-[58px] justify-between items-center">
        <div className="w-[167px] h-full flex flex-row items-center gap-[8px]">
          <p className="font-[500] text-[12px] leading-none text-[#8A8A8A]">Starting from</p>
          <p className="font-[600] text-[32px] leading-none text-[#141414]">
            ${Number(course.basePrice)}
          </p>
        </div>
        <Button
          text="Details"
          classname="text-[#F5F5F5] text-[20px]"
          onClick={() => navigate(`/courses/${course.id}`)}
        />
      </div>
    </div>
  );
};

export default StartLearningCard;
