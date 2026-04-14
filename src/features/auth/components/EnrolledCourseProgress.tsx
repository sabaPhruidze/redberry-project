// Reusable filled-course progress bar with fixed Figma track sizes.
type EnrolledCourseProgressProps = {
  value: number;
};

const EnrolledCourseProgress = ({ value }: EnrolledCourseProgressProps) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className="h-[15px] w-[442px] overflow-hidden rounded-[30px] bg-[#DDDBFA]">
      <div
        className="h-[15px] rounded-[30px] bg-[#4F46E5]"
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
};

export default EnrolledCourseProgress;
