// Header row for enrolled courses sidebar with fixed title and count blocks.
type EnrolledCoursesPanelHeaderProps = {
  totalEnrollments: number;
};

const EnrolledCoursesPanelHeader = ({
  totalEnrollments,
}: EnrolledCoursesPanelHeaderProps) => {
  return (
    <div className="flex h-[48px] w-[646px] items-center justify-between">
      <div className="flex h-[48px] flex-1 items-center">
        <h2 className="h-[48px] w-[330px] text-[40px] font-[600] leading-[100%] tracking-[0] text-[#0A0A0A]">
          Enrolled Courses
        </h2>
      </div>
      <p className="flex h-[48px] w-[148px] items-center justify-end text-right text-[16px] font-[500] leading-[24px] tracking-[0] text-black">
        <span>Total Enrollments&nbsp;</span>
        <span className=" font-[600] leading-[100%] tracking-[0] text-[#0A0A0A]">
          {totalEnrollments}
        </span>
      </p>
    </div>
  );
};

export default EnrolledCoursesPanelHeader;
