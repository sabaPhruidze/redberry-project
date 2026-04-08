type AuthStepIndicatorProps = {
  currentStep?: 1 | 2 | 3;
  totalSteps?: number;
};

const AuthStepIndicator = ({
  currentStep = 1,
  totalSteps = 3,
}: AuthStepIndicatorProps) => {
  const segmentColors = Array.from({ length: totalSteps }, () => "#EEEDFC");

  if (currentStep === 1) {
    segmentColors[0] = "#B7B3F4";
  }

  if (currentStep === 2) {
    segmentColors[0] = "#4F46E5";
    segmentColors[1] = "#B7B3F4";
  }

  if (currentStep === 3) {
    segmentColors[0] = "#4F46E5";
    segmentColors[1] = "#4F46E5";
    segmentColors[2] = "#B7B3F4";
  }

  return (
    <div className="flex h-[8px] w-[360px] gap-[8px]">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className="rounded-full"
          style={{
            width: "114.67px",
            height: "8px",
            backgroundColor: segmentColors[index],
          }}
        />
      ))}
    </div>
  );
};

export default AuthStepIndicator;
