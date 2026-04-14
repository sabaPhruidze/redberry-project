type EnrolledCoursesConfirmBoxProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

const EnrolledCoursesConfirmBox = ({
  onCancel,
  onConfirm,
}: EnrolledCoursesConfirmBoxProps) => {
  return (
    <div className="w-[360px] rounded-[10px] border border-[#D1D1D1] bg-white p-[12px]">
      <p className="text-[14px] leading-[140%] text-[#3D3D3D]">
        Are you sure you want to complete enrollment for these courses?
      </p>
      <div className="mt-[10px] flex justify-end gap-[8px]">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-[6px] border border-[#D1D1D1] px-[12px] py-[6px] text-[12px] text-[#3D3D3D]"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="rounded-[6px] bg-[#4F46E5] px-[12px] py-[6px] text-[12px] text-white"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default EnrolledCoursesConfirmBox;
