import Button from "../../../components/ui/Button";

type EnrolledCoursesEmptyStateProps = {
  onBrowseCourses: () => void;
};

const EnrolledCoursesEmptyState = ({
  onBrowseCourses,
}: EnrolledCoursesEmptyStateProps) => {
  return (
    <div className="w-[360px] rounded-[10px] border border-[#E7E7E7] bg-white p-[16px]">
      <p className="text-[16px] leading-[150%] text-[#3D3D3D]">
        You haven&apos;t enrolled in any courses yet. Start your learning journey
        today!
      </p>
      <div className="mt-[12px]">
        <Button
          text="Browse Courses"
          classname="text-[15px]"
          onClick={onBrowseCourses}
        />
      </div>
    </div>
  );
};

export default EnrolledCoursesEmptyState;
