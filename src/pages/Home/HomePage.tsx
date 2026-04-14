import MainLayout from "../../layouts/MainLayout";
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

  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px]">
        <HeroSection />
        {isAuthenticated ? (
          <>
            <ContinueLearning />
            <StartLearning />
          </>
        ) : (
          <>
            <StartLearning />
            <ContinueLearning />
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default HomePage;
