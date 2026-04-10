import MainLayout from "../../layouts/MainLayout";
import StartLearning from "../Home/components/StartLearning";

const CoursesCatalogPage = () => {
  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px] py-[64px]">
        <StartLearning />
      </div>
    </MainLayout>
  );
};

export default CoursesCatalogPage;
