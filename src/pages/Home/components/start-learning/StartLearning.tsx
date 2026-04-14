import useFeaturedCourses from "../../../../api/hooks/courses/useFeaturedCourses";
import StartLearningCard from "./StartLearningCard";

const StartLearning = () => {
  const { data, isLoading, isError, error } = useFeaturedCourses();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <p>{error instanceof Error ? error.message : "Something went wrong"}</p>
    );
  }
  return (
    <section>
      <div className="w-[1566px] h-[739px]">
        <h2 className="text-redberry-text-black w-[538px] h-[48px] font-semibold text-[40px] leading-none">
          Start Learning Today
        </h2>
        <p className="text-redberry-text-gray-medium font-[500] text-[18px] mt-[6px] mb-[32px]">
          Choose from our most popular courses and begin your journey
        </p>
        <div className="w-full h-[576px] flex flex-row gap-[24px]">
          {data?.map((course) => (
            <StartLearningCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartLearning;
