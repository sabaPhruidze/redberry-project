import useFeaturedCourses from "../../../api/hooks/useFeaturedCourses";
import STAR from "../../../assets/icons/home/Star.svg";
import HALF_STAR from "../../../assets/icons/home/Star (1).svg";
import EMPTY_STAR from "../../../assets/icons/home/Star (2).svg";
import Button from "../../../components/ui/Button";
import DEVELOPMENT from "../../../assets/icons/courses/Icon Set=Development.svg";
import { useNavigate } from "react-router-dom";
const CardsMiddle = () => {
  const { data, isLoading, isError, error } = useFeaturedCourses();
  const navigate = useNavigate();
  const getRatingIcon = (avgRating: number | null) => {
    if (avgRating === null) {
      return EMPTY_STAR;
    }
    if (avgRating <= 4) {
      return HALF_STAR;
    }
    return STAR;
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <p>{error instanceof Error ? error.message : "Something went wrong"}</p>
    );
  }
  return (
    <div className="w-[1167px] h-[1401px] flex flex-row flex-wrap gap-[24px] mt-[32px]">
      {data?.map((course) => (
        <div
          key={course.id}
          className="w-[373px] h-[451px] p-[20px] rounded-[12px] bg-white border border-[#F5F5F5]"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-[181px]"
          />
          <div className="mt-[18px] mb-[12px] flex flex-row justify-between w-full">
            <p className="leading-[100%] w-[181px] h-[17px] font-[500] text-[14px] text-[#ADADAD]">
              {course.instructor.name} | {course.durationWeeks} Weeks
            </p>
            <div className="flex flex-row items-center gap-[4px]">
              <img
                src={getRatingIcon(course.avgRating)}
                alt="star icon"
                className="w-[18px] h-[18px]"
              />
              <p className="font-[500] text-[14px] leading-[100%] text-redberry-text-gray-light">
                {course.avgRating || 0}
              </p>
            </div>
          </div>
          <h2 className="mb-[18px] w-full leading-[100%] font-[600] text-[24px] text-[#0A0A0A]">
            {course.title}
          </h2>
          <div className="mb-[18px] flex flex-row items-center max-w-[150px] px-[12px] py-[8px] rounded-[12px] bg-[#F5F5F5] ">
            <img
              src={DEVELOPMENT}
              alt="development icon"
              className="w-[18px] h-[18px] mr-[6px] mt-[1px]"
            />
            <h4 className="text-[#525252] font-[500] leading-[24px]">
              Development
            </h4>
          </div>
          <div className="flex flex-row w-full h-[48px] justify-between items-center">
            <div className="w-[167px] h-full flex flex-col">
              <p className="w-[76px] h-[15px] font-[500] text-[12px] leading-none text-[#999999]">
                Starting from
              </p>
              <p className="h-[29px] font-[600] text-[24px] leading-[100%] text-[#3D3D3D]">
                ${Number(course.basePrice)}
              </p>
            </div>

            <Button
              text="Details"
              classname="w-[103px] h-[48px] py-[12px] text-[#F5F5F5]"
              onClick={() => navigate(`/courses/${course.id}`)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsMiddle;
