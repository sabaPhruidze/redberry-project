import { Link, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import useCourseDetail from "../../api/hooks/course-detail/useCourseDetail";
import CourseDetailLeft from "./components/detail/layout/CourseDetailLeft";
import CourseDetailRight from "./components/detail/layout/CourseDetailRight";
const CourseDetailPage = () => {
  const params = useParams<{ id: string }>();
  const parsedCourseId = Number(params.id);
  const courseId =
    Number.isInteger(parsedCourseId) && parsedCourseId > 0
      ? parsedCourseId
      : undefined;
  const {
    data: courseDetailResponse,
    isLoading,
    isError,
    error,
  } = useCourseDetail(courseId);
  const course = courseDetailResponse?.data;
  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px] pt-[64px] pb-[225.8px]">
        {isLoading ? (
          <p className="text-[18px] text-[#666666]">
            Loading course details...
          </p>
        ) : null}
        {isError ? (
          <p className="text-[18px] text-[#F4161A]">
            {error instanceof Error
              ? error.message
              : "Failed to load course details."}
          </p>
        ) : null}
        {!isLoading && !isError && (!courseId || !course) ? (
          <div className="max-w-[780px] rounded-[12px] border border-[#E7E7E7] bg-white p-[24px]">
            <h1 className="text-[30px] font-semibold text-[#141414]">
              Course not found
            </h1>
            <p className="mt-[10px] text-[16px] text-[#666666]">
              This course detail is currently unavailable.
            </p>
            <Link
              to="/courses/catalog"
              className="mt-[16px] inline-block text-[16px] text-[#4F46E5] underline"
            >
              Back to catalog
            </Link>
          </div>
        ) : null}
        {!isLoading && !isError && course ? (
          <div className="flex flex-row gap-[133px]">
            <CourseDetailLeft course={course} />
            <CourseDetailRight
              courseId={course.id}
              courseTitle={course.title}
              courseBasePrice={course.basePrice}
              courseEnrollment={course.enrollment}
              courseIsRated={course.isRated}
            />
          </div>
        ) : null}
      </div>
    </MainLayout>
  );
};
export default CourseDetailPage;
