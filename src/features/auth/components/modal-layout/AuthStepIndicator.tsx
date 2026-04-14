type AuthStepIndicatorProps = {
  currentStep?: 1 | 2 | 3;
  totalSteps?: number;
};

const AuthStepIndicator = ({
  currentStep = 1,
  totalSteps = 3,
}: AuthStepIndicatorProps) => {
  const safeCurrentStep = Math.min(Math.max(currentStep, 1), totalSteps);

  const getStepColor = (index: number) => {
    if (index < safeCurrentStep - 1) return "#4F46E5";
    if (index === safeCurrentStep - 1) return "#B7B3F4";
    return "#EEEDFC";
  };

  return (
    <div className="flex w-[360px] gap-[8px]">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className="h-[8px] flex-1 rounded-[30px]"
          style={{ backgroundColor: getStepColor(index) }}
        />
      ))}
    </div>
  );
};

export default AuthStepIndicator;
