type EnrolledCoursesSummaryProps = {
  courseCount: number;
  totalPrice: number;
};

const EnrolledCoursesSummary = ({
  courseCount,
  totalPrice,
}: EnrolledCoursesSummaryProps) => {
  return (
    <div className="w-[360px] rounded-[10px] border border-[#D9D7FD] bg-[#F8F7FF] p-[14px]">
      <h3 className="text-[15px] font-[600] text-[#141414]">Summary</h3>
      <div className="mt-[8px] flex items-center justify-between text-[14px] text-[#666666]">
        <span>Courses</span>
        <span>{courseCount}</span>
      </div>
      <div className="mt-[6px] flex items-center justify-between text-[18px] font-[600] text-[#141414]">
        <span>Total Price</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default EnrolledCoursesSummary;
