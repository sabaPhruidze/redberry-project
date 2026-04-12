import { Link, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import useFeaturedCourses from "../../api/hooks/useFeaturedCourses";
import useInProgressCourses from "../../api/hooks/useInProgressCourses";
import BreadcrumbIndividual from "./components/BreadcrumbIndividual";

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
  const selectedCourse = data?.find((course) => course.id === courseId);
  const inProgressCourse = inProgressCourses?.find(
    (item) => item.course.id === courseId,
  )?.course;
  const course = selectedCourse ?? inProgressCourse;

  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px] py-[64px]">
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
        {!isLoading && !isError && (!Number.isInteger(courseId) || !course) ? (
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
          <div>
            <div id="left" className="w-[903px]">
              <div>
                <BreadcrumbIndividual />
                <h1 className="mt-[32px] text-[#141414] font-[600] text-[40px] leading-[100%]">
                  Advanced React & TypeScript Development
                </h1>
              </div>
            </div>
            <div id="right"></div>
          </div>
        ) : null}
      </div>
    </MainLayout>
  );
};

export default CourseDetailPage;
