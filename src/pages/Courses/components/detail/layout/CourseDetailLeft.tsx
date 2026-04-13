import type { CourseDetail } from "../../../../../types/courseDetail";
import CourseDetailBreadcrumb from "../sections/CourseDetailBreadcrumb";
import CourseDetailMetaRow from "../sections/CourseDetailMetaRow";
import CourseInstructorChip from "../sections/CourseInstructorChip";
import CourseDescription from "../sections/CourseDescription";

interface CourseDetailLeftProps {
  course: CourseDetail;
}

const CourseDetailLeft = ({ course }: CourseDetailLeftProps) => {
  return (
    <div id="left" className="w-[903px]">
      <div className="w-full">
        <CourseDetailBreadcrumb categoryName={course.category.name} />
        <h1 className="mt-[32px] text-[#141414] font-[600] text-[40px] leading-[100%] h-[48px]">
          {course.title}
        </h1>
      </div>
      <div className="w-full mt-[24px]">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[474.1px] rounded-[10px]"
        />
        <CourseDetailMetaRow
          durationWeeks={course.durationWeeks}
          categoryName={course.category.name}
          categoryIcon={course.category.icon}
        />
        <div>
          <CourseInstructorChip
            instructorName={course.instructor.name}
            instructorAvatar={course.instructor.avatar}
          />
          <CourseDescription description={course.description} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailLeft;
