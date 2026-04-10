import MainLayout from "../../layouts/MainLayout";
import ContinueLearning from "./components/ContinueLearning";
import HeroSection from "./components/HeroSection";
import StartLearning from "./components/StartLearning";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px]">
        <HeroSection />
        <StartLearning />
        <ContinueLearning />
      </div>
    </MainLayout>
  );
};

export default HomePage;
