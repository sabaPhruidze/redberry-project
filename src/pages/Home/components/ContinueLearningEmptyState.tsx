import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";

const ContinueLearningEmptyState = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-[20px] w-full rounded-[12px] border border-[#E7E7E7] bg-white p-[24px]">
      <p className="text-[18px] leading-[150%] text-[#3D3D3D]">
        You haven&apos;t enrolled in any courses yet. Start your learning journey
        today!
      </p>
      <div className="mt-[16px]">
        <Button
          text="Browse Courses"
          classname="text-[16px]"
          onClick={() => navigate("/courses/catalog")}
        />
      </div>
    </div>
  );
};

export default ContinueLearningEmptyState;
