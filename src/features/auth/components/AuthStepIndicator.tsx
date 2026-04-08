type AuthStepIndicatorProps = {
  currentStep?: number;
  totalSteps?: number;
};

const AuthStepIndicator = ({
  currentStep = 1,
  totalSteps = 3,
}: AuthStepIndicatorProps) => {
  return (
    <div className="w-[360px]">
      <div className="mb-[24px] flex h-[8px] w-[360px] gap-[8px]">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className="rounded-full"
            style={{
              width: "114.67px",
              height: "8px",
              backgroundColor: index + 1 === currentStep ? "#B7B3F4" : "#EEEDFC",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthStepIndicator;
