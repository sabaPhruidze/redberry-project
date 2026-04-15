import type { ReactNode } from "react";
import ContinueLearningCard from "./ContinueLearningCard";
import ContinueLearningLocked from "./ContinueLearningLocked";
import { useProtectedAction } from "../../../../features/auth/hooks/useProtectedAction";
import { CONTINUE_LEARNING_DATA } from "../../data/continueLearning.data";
import { useAuthModal } from "../../../../features/auth/hooks/useAuthModal";
import type { InProgressCourseItem } from "../../../../types/courses";

type ContinueLearningSectionProps = {
  bottomMarginClass: string;
  showSeeAll: boolean;
  onSeeAll: () => void;
  children: ReactNode;
};

const ContinueLearningSection = ({
  bottomMarginClass,
  showSeeAll,
  onSeeAll,
  children,
}: ContinueLearningSectionProps) => (
  <section>
    <div className={`${bottomMarginClass} w-[1566px]`}>
      <h2 className="h-[48px] text-[40px] font-[600] leading-[100%] text-redberry-text-black">
        Continue Learning
      </h2>
      <div className="mt-[6px] flex h-[22px] flex-row justify-between">
        <p className=" h-full text-[18px] font-[500] leading-[100%] text-redberry-text-gray-medium">
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

type ContinueLearningProps = {
  bottomMarginClass: string;
  courses?: InProgressCourseItem[];
  error?: unknown;
  isAuthenticated: boolean;
  isError?: boolean;
  isLoading?: boolean;
};

const ContinueLearning = ({
  bottomMarginClass,
  courses = [],
  error,
  isAuthenticated,
  isError = false,
  isLoading = false,
}: ContinueLearningProps) => {
  const { handleProtectedAction } = useProtectedAction();
  const { openEnrolledCoursesModal } = useAuthModal();
  const openEnrolledCourses = () =>
    handleProtectedAction(() => openEnrolledCoursesModal());
  const authorizedCourses = courses.slice(0, 3);
  const hasAuthorizedCourses = authorizedCourses.length > 0;

  if (!isAuthenticated) {
    return (
      <ContinueLearningSection
        bottomMarginClass={bottomMarginClass}
        showSeeAll
        onSeeAll={openEnrolledCourses}
      >
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
      bottomMarginClass={bottomMarginClass}
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
