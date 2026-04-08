import ContinueLearningCard from "./ContinueLearningCard";
import ContinueLearningLocked from "./ContinueLearningLocked";
import { useProtectedAction } from "../../../features/auth/hooks/useProtectedAction";
import { CONTINUE_LEARNING_DATA } from "./continueLearning.data";

const ContinueLearning = () => {
  const { handleProtectedAction } = useProtectedAction();

  return (
    <section>
      <div className="w-[1566px] h-[369px] mb-[120px] ">
        <h2 className="font-[600] text-[40px] h-[48px] leading-[100%] text-redberry-text-black">
          Continue Learning
        </h2>
        <div className="flex flex-row justify-between h-[22px]">
          <p className="text-redberry-text-gray-medium h-full mt-[6px] font-[500] text-[18px] leading-[100%] mb-[32px]">
            Pick up where you left
          </p>
          <button
            type="button"
            onClick={() => handleProtectedAction()}
            className="font-[500] text-[20px] leading-[100%] text-[#4F46E5] underline"
          >
            See All
          </button>
        </div>
        <div className="mt-[32px] flex flex-row flex-wrap gap-[24px] w-full h-[219px] relative z-1">
          {CONTINUE_LEARNING_DATA.data.map((course) => (
            <div key={course.id}>
              <ContinueLearningCard course={course} />
              <ContinueLearningLocked />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContinueLearning;
