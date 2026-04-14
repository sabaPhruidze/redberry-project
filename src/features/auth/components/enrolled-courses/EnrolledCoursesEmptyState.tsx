import BOX_ICON from "../../../../assets/icons/box.svg";

// Empty state for enrolled courses sidebar while list UI is not rendered yet.
type EnrolledCoursesEmptyStateProps = {
  onBrowseCourses: () => void;
};

const EnrolledCoursesEmptyState = ({
  onBrowseCourses,
}: EnrolledCoursesEmptyStateProps) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-[329px] w-[448px] flex-col gap-[4px]">
        <div className="mx-auto flex h-[170px] w-[190px] items-center justify-center gap-[10px] rounded-[2000px] p-[30px]">
          <img src={BOX_ICON} alt="" className="h-[132px] w-[130px]" />
        </div>
        <div className="flex w-[448px] flex-col gap-[12px]">
          <div className="flex w-[448px] flex-col items-center gap-[8px] text-center">
            <h3 className="h-[29px] w-[448px] text-center text-[24px] font-[600] leading-[100%] tracking-[0] text-[#130E67]">
              No Enrolled Courses Yet
            </h3>
            <div className="flex h-[48px] w-[448px] justify-center">
              <p className="h-[48px] w-[274px] text-center text-[14px] font-[500] leading-[100%] tracking-[0] text-[#130E67]">
                Your learning journey starts here!
                <br />
                Browse courses to get started.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onBrowseCourses}
            className="mx-auto flex h-[58px] w-[175px] items-center justify-center gap-[10px] rounded-[8px] bg-[#4F46E5] px-[25px] py-[17px]"
          >
            <span className="h-[24px] w-[125px] text-center text-[16px] font-[500] leading-[24px] tracking-[0] text-white">
              Browse Courses
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCoursesEmptyState;
