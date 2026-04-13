import type { CourseDetail } from "../../../../../types/courseDetail";
import RIGHT_ARROW from "../../../../../assets/icons/courses/right-arrow.svg";
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
        <div className="h-[28px] flex flex-row items-center">
          <p className="font-[500] text-[18px] leading-[100%] text-[#666666]">
            Home
          </p>
          <img
            src={RIGHT_ARROW}
            alt="right arrow"
            className="w-[12px] h-[24px] ml-[4px] mr-[6px]"
          />
          <p className="font-[500] text-[18px] leading-[100%] text-[#666666]">
            Browse
          </p>
          <img
            src={RIGHT_ARROW}
            alt="right arrow"
            className="w-[12px] h-[24px] ml-[4px] mr-[6px]"
          />
          <p className=" text-[#736BEA] font-[500] text-[18px] leading-[100%]">
            Development
          </p>
        </div>
        <h1 className="mt-[32px] text-[#141414] font-[600] text-[40px] leading-[100%] h-[48px]">
          {course.title}
        </h1>
      </div>
      <div className="w-full mt-[24px]">
        <img src={course.image} alt={course.title} className="w-full fill" />
        <CourseDetailMetaRow
          durationWeeks={course.durationWeeks}
          categoryName={course.category.name}
          categoryIcon={course.category.icon}
          topicName={course.topic.name}
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


