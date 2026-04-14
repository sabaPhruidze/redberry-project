import type { ReactNode } from "react";
import ContinueLearningCard from "./ContinueLearningCard";
import ContinueLearningLocked from "./ContinueLearningLocked";
import { useProtectedAction } from "../../../../features/auth/hooks/useProtectedAction";
import { CONTINUE_LEARNING_DATA } from "../../data/continueLearning.data";
import { useAuthModal } from "../../../../features/auth/hooks/useAuthModal";
import useInProgressCourses from "../../../../api/hooks/useInProgressCourses";

type ContinueLearningSectionProps = {
  showSeeAll: boolean;
  onSeeAll: () => void;
  children: ReactNode;
};

const ContinueLearningSection = ({
  showSeeAll,
  onSeeAll,
  children,
}: ContinueLearningSectionProps) => (
  <section>
    <div className="mb-[64px] w-[1566px]">
      <h2 className="h-[48px] text-[40px] font-[600] leading-[100%] text-redberry-text-black">
        Continue Learning
      </h2>
      <div className="flex h-[22px] flex-row justify-between">
        <p className="mb-[32px] mt-[6px] h-full text-[18px] font-[500] leading-[100%] text-redberry-text-gray-medium">
          Pick up where you left
        </p>
        {showSeeAll ? (
          <button
            type="button"
            onClick={onSeeAll}
            className="font-[500] text-[20px] leading-[100%] text-[#4F46E5] underline"
          >
            See All
          </button>
        ) : null}
      </div>
      {children}
    </div>
  </section>
);

const getIsAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(localStorage.getItem("access_token"));
};

const ContinueLearning = () => {
  const isAuthenticated = getIsAuthenticated();
  const { data, isLoading, isError, error } =
    useInProgressCourses(isAuthenticated);
  const { handleProtectedAction } = useProtectedAction();
  const { openEnrolledCoursesModal } = useAuthModal();
  const openEnrolledCourses = () =>
    handleProtectedAction(() => openEnrolledCoursesModal());
  const authorizedCourses = (data ?? []).slice(0, 3);
  const hasAuthorizedCourses = authorizedCourses.length > 0;

  if (!isAuthenticated) {
    return (
      <ContinueLearningSection showSeeAll onSeeAll={openEnrolledCourses}>
        <div className="relative z-1 mt-[32px] flex h-[219px] w-full flex-row flex-wrap gap-[24px]">
          {CONTINUE_LEARNING_DATA.map((course) => (
            <ContinueLearningCard key={course.id} course={course} isBlurred />
          ))}
          <ContinueLearningLocked />
        </div>
      </ContinueLearningSection>
    );
  }

  if (!isLoading && !isError && !hasAuthorizedCourses) {
    return null;
  }

  return (
    <ContinueLearningSection
      showSeeAll={hasAuthorizedCourses}
      onSeeAll={openEnrolledCourses}
    >
      {isLoading ? (
        <p className="mt-[32px] text-[16px] text-[#666666]">
          Loading your courses...
        </p>
      ) : null}
      {isError ? (
        <p className="mt-[32px] text-[16px] text-[#F4161A]">
          {error instanceof Error
            ? error.message
            : "Failed to load enrolled courses."}
        </p>
      ) : null}
      {hasAuthorizedCourses ? (
        <div className="relative z-1 mt-[32px] flex w-full flex-row flex-wrap gap-[24px]">
          {authorizedCourses.map((course) => (
            <ContinueLearningCard key={course.id} course={course} />
          ))}
        </div>
      ) : null}
    </ContinueLearningSection>
  );
};

export default ContinueLearning;
