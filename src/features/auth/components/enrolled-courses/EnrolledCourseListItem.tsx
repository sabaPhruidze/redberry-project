import type { InProgressCourseItem } from "../../../../types/courses";

type EnrolledCourseListItemProps = {
  item: InProgressCourseItem;
  onRemoveEnrollment: (enrollmentId: number) => void;
  isRemoving?: boolean;
};

const EnrolledCourseListItem = ({
  item,
  onRemoveEnrollment,
  isRemoving = false,
}: EnrolledCourseListItemProps) => {
  return (
    <li className="rounded-[10px] border border-[#E7E7E7] bg-white p-[12px]">
      <div className="flex items-start justify-between gap-[8px]">
        <div>
          <p className="text-[15px] font-[600] leading-[130%] text-[#141414]">
            {item.course.title}
          </p>
          <p className="mt-[4px] text-[13px] text-[#666666]">
            {item.course.instructor.name}
          </p>
        </div>
        <p className="text-[14px] font-[600] text-[#141414]">
          ${Number(item.totalPrice)}
        </p>
      </div>
      <div className="mt-[8px] flex items-center justify-between">
        <p className="text-[12px] text-[#666666]">{item.progress}% complete</p>
        <button
          type="button"
          disabled={isRemoving}
          onClick={() => onRemoveEnrollment(item.id)}
          className="text-[13px] text-[#4F46E5] underline"
        >
          {isRemoving ? "Removing..." : "Remove"}
        </button>
      </div>
    </li>
  );
};

export default EnrolledCourseListItem;
