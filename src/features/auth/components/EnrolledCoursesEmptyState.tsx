// Empty state for enrolled courses sidebar while list UI is not rendered yet.
type EnrolledCoursesEmptyStateProps = {
  onBrowseCourses: () => void;
};

const EnrolledCoursesEmptyState = ({
  onBrowseCourses,
}: EnrolledCoursesEmptyStateProps) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[302px] flex-col items-center text-center">
        <h3 className="text-[32px] font-[600] leading-[100%] tracking-[0] text-[#3D3D3D]">
          No Enrolled Courses Yet
        </h3>
        <p className="mt-[12px] text-[16px] font-[500] leading-[24px] tracking-[0] text-[#525252]">
          Your learning journey starts here!
        </p>
        <p className="text-[16px] font-[500] leading-[24px] tracking-[0] text-[#525252]">
          Browse courses to get started.
        </p>
        <button
          type="button"
          onClick={onBrowseCourses}
          className="mt-[24px] rounded-[8px] bg-[#4F46E5] px-[25px] py-[17px] text-[16px] font-[500] leading-[24px] text-white"
        >
          Browse Courses
        </button>
      </div>
    </div>
  );
};

export default EnrolledCoursesEmptyState;
