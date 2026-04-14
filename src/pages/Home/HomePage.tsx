import MainLayout from "../../layouts/MainLayout";
import useInProgressCourses from "../../api/hooks/courses/useInProgressCourses";
import ContinueLearning from "./components/continue-learning/ContinueLearning";
import HeroSection from "./components/hero/HeroSection";
import StartLearning from "./components/start-learning/StartLearning";

const getIsAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(localStorage.getItem("access_token"));
};

const HomePage = () => {
  const isAuthenticated = getIsAuthenticated();
  const {
    data: inProgressCourses,
    error: inProgressError,
    isError: isInProgressError,
    isLoading: isInProgressLoading,
  } = useInProgressCourses(isAuthenticated);
  const hasAuthorizedContinueCourses = (inProgressCourses?.length ?? 0) > 0;
  const shouldShowAuthorizedContinue =
    isInProgressLoading || isInProgressError || hasAuthorizedContinueCourses;
  const authorizedStartMarginClass = shouldShowAuthorizedContinue
    ? "mb-[248px]"
    : "mb-[192px]";

  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px]">
        <HeroSection />
        {isAuthenticated ? (
          <>
            <ContinueLearning
              bottomMarginClass="mb-[64px]"
              courses={inProgressCourses ?? []}
              error={inProgressError}
              isAuthenticated
              isError={isInProgressError}
              isLoading={isInProgressLoading}
            />
            <div className={authorizedStartMarginClass}>
              <StartLearning />
            </div>
          </>
        ) : (
          <>
            <div className="mb-[64px]">
              <StartLearning />
            </div>
            <ContinueLearning
              bottomMarginClass="mb-[120px]"
              isAuthenticated={false}
            />
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default HomePage;
