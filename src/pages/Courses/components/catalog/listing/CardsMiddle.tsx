// Renders the catalog cards grid from real backend courses data.
// Keeps the same grid layout and card spacing as the existing UI.
import type { CourseCardItem } from "../../../../../types/courses";
import CatalogCourseCard from "./CatalogCourseCard";

type CardsMiddleProps = {
  courses: CourseCardItem[];
};

const CardsMiddle = ({ courses }: CardsMiddleProps) => {
  if (!courses.length) {
    return <p className="mt-[32px] text-[16px] text-[#8A8A8A]">No courses found.</p>;
  }

  return (
    <div className="w-[1167px] mt-[32px] grid grid-cols-3 gap-[24px]">
      {courses.map((course) => (
        <CatalogCourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CardsMiddle;


