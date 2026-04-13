interface CourseInstructorChipProps {
  instructorName: string;
  instructorAvatar: string;
}

const CourseInstructorChip = ({
  instructorName,
  instructorAvatar,
}: CourseInstructorChipProps) => {
  return (
    <div className="mb-[18px] inline-flex self-start h-[46px] bg-white px-[12px] py-[8px] gap-[12px] rounded-[12px]">
      <img
        src={instructorAvatar}
        alt={`${instructorName} avatar`}
        className="w-[30px] h-[30px] rounded-[4px]"
      />
      <p className="text-[#666666] font-[500] leading-[24px]">
        {instructorName}
      </p>
    </div>
  );
};

export default CourseInstructorChip;
