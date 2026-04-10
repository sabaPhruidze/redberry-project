import { Link, useParams } from "react-router-dom";
import Button from "../../components/ui/Button";
import MainLayout from "../../layouts/MainLayout";
import useFeaturedCourses from "../../api/hooks/useFeaturedCourses";
import useInProgressCourses from "../../api/hooks/useInProgressCourses";
import { useProtectedAction } from "../../features/auth/hooks/useProtectedAction";
import { useAuthModal } from "../../features/auth/hooks/useAuthModal";

const getIsAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(localStorage.getItem("access_token"));
};

const CourseDetailPage = () => {
  const params = useParams<{ id: string }>();
  const courseId = Number(params.id);
  const isAuthenticated = getIsAuthenticated();
  const { data, isLoading, isError, error } = useFeaturedCourses();
  const { data: inProgressCourses } = useInProgressCourses(isAuthenticated);
  const { handleProtectedEnrollAction } = useProtectedAction();
  const { openEnrolledCoursesModal } = useAuthModal();
  const selectedCourse = data?.find((course) => course.id === courseId);
  const inProgressCourse = inProgressCourses?.find(
    (item) => item.course.id === courseId,
  )?.course;
  const course = selectedCourse ?? inProgressCourse;

  const handleEnrollClick = () =>
    handleProtectedEnrollAction(() => openEnrolledCoursesModal());

  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px] py-[64px]">
        {isLoading ? <p className="text-[18px] text-[#666666]">Loading course details...</p> : null}
        {isError ? (
          <p className="text-[18px] text-[#F4161A]">
            {error instanceof Error ? error.message : "Failed to load course details."}
          </p>
        ) : null}
        {!isLoading && !isError && (!Number.isInteger(courseId) || !course) ? (
          <div className="max-w-[780px] rounded-[12px] border border-[#E7E7E7] bg-white p-[24px]">
            <h1 className="text-[30px] font-semibold text-[#141414]">Course not found</h1>
            <p className="mt-[10px] text-[16px] text-[#666666]">This course detail is currently unavailable.</p>
            <Link to="/courses/catalog" className="mt-[16px] inline-block text-[16px] text-[#4F46E5] underline">
              Back to catalog
            </Link>
          </div>
        ) : null}
        {!isLoading && !isError && course ? (
          <article className="flex max-w-[1120px] flex-col gap-[20px] rounded-[16px] border border-[#E7E7E7] bg-white p-[24px] md:flex-row">
            <img src={course.image} alt={course.title} className="h-[260px] w-full rounded-[12px] object-cover md:w-[420px]" />
            <div className="flex flex-1 flex-col">
              <p className="text-[14px] text-[#8A8A8A]">{course.instructor.name}</p>
              <h1 className="mt-[8px] text-[32px] font-semibold leading-[120%] text-[#141414]">{course.title}</h1>
              <p className="mt-[12px] text-[16px] leading-[150%] text-[#666666]">{course.description || "Course description is not available yet."}</p>
              <p className="mt-[14px] text-[16px] text-[#3D3D3D]">Rating: {course.avgRating ?? 0}</p>
              <p className="mt-[6px] text-[18px] font-semibold text-[#141414]">Price: ${Number(course.basePrice ?? 0)}</p>
              <div className="mt-[20px]">
                <Button text="Enroll Now" classname="text-[16px]" onClick={handleEnrollClick} />
              </div>
            </div>
          </article>
        ) : null}
      </div>
    </MainLayout>
  );
};

export default CourseDetailPage;
