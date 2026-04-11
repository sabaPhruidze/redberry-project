import ContinueLearningCard from "./ContinueLearningCard";
import ContinueLearningLocked from "./ContinueLearningLocked";
import { useProtectedAction } from "../../../features/auth/hooks/useProtectedAction";
import { CONTINUE_LEARNING_DATA } from "./continueLearning.data";
import { useAuthModal } from "../../../features/auth/hooks/useAuthModal";
import useInProgressCourses from "../../../api/hooks/useInProgressCourses";

const getIsAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(localStorage.getItem("access_token"));
};

const ContinueLearning = () => {
  const isAuthenticated = getIsAuthenticated();
  const { data, isLoading, isError, error } = useInProgressCourses(isAuthenticated);
  const { handleProtectedAction } = useProtectedAction();
  const { openEnrolledCoursesModal } = useAuthModal();

  const courses = data ?? [];
  const hasEnrollments = courses.length > 0;
  const openEnrolledCourses = () =>
    handleProtectedAction(() => openEnrolledCoursesModal());

  if (isAuthenticated && !isLoading && !isError && !hasEnrollments) {
    return <section className="h-[137px]" />;
  }

  return (
    <section>
      <div className="mb-[120px] w-[1566px]">
        <h2 className="h-[48px] text-[40px] font-[600] leading-[100%] text-redberry-text-black">
          Continue Learning
        </h2>
        <div className="flex h-[22px] flex-row justify-between">
          <p className="mb-[32px] mt-[6px] h-full text-[18px] font-[500] leading-[100%] text-redberry-text-gray-medium">
            Pick up where you left
          </p>
          <button
            type="button"
            onClick={openEnrolledCourses}
            className="font-[500] text-[20px] leading-[100%] text-[#4F46E5] underline"
          >
            See All
          </button>
        </div>
        {isAuthenticated && isLoading ? (
          <p className="mt-[32px] text-[16px] text-[#666666]">Loading your courses...</p>
        ) : null}
        {isAuthenticated && isError ? (
          <p className="mt-[32px] text-[16px] text-[#F4161A]">
            {error instanceof Error ? error.message : "Failed to load enrolled courses."}
          </p>
        ) : null}
        {!isAuthenticated ? (
          <div className="relative z-1 mt-[32px] flex h-[219px] w-full flex-row flex-wrap gap-[24px]">
            {CONTINUE_LEARNING_DATA.map((course) => (
              <ContinueLearningCard key={course.id} course={course} isBlurred />
            ))}
            <ContinueLearningLocked />
          </div>
        ) : null}
        {isAuthenticated && hasEnrollments ? (
          <div className="relative z-1 mt-[32px] flex w-full flex-row flex-wrap gap-[24px]">
            {courses.map((course) => (
              <ContinueLearningCard key={course.id} course={course} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ContinueLearning;
