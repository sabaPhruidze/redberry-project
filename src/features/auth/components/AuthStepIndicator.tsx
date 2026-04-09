type AuthStepIndicatorProps = {
  currentStep?: 1 | 2 | 3;
  totalSteps?: number;
};

const AuthStepIndicator = ({
  currentStep = 1,
  totalSteps = 3,
}: AuthStepIndicatorProps) => {
  const steps = Array.from({ length: totalSteps }, (_, index) => index < currentStep);

  return (
    <div className="flex w-[360px] gap-[8px]">
      {steps.map((isActive, index) => (
        <div
          key={index}
          className="h-[8px] rounded-[30px]"
          style={{
            width: "114.67px",
            backgroundColor: isActive ? "#4F46E5" : "#EEEDFC",
          }}
        />
      ))}
    </div>
  );
};

export default AuthStepIndicator;
