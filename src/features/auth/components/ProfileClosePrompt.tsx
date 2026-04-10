type ProfileClosePromptProps = {
  message: string;
  onStay: () => void;
  onCloseAnyway: () => void;
};

const ProfileClosePrompt = ({
  message,
  onStay,
  onCloseAnyway,
}: ProfileClosePromptProps) => {
  return (
    <div className="mt-[8px] w-[360px] rounded-[8px] border border-[#F2C94C] bg-[#FFFBEC] p-[12px]">
      <p
        className="text-[12px] leading-[140%] text-[#7A5A00]"
        style={{ fontWeight: 500 }}
      >
        {message}
      </p>
      <div className="mt-[10px] flex items-center justify-end gap-[8px]">
        <button
          type="button"
          onClick={onStay}
          className="rounded-[6px] border border-[#D1D1D1] px-[12px] py-[6px] text-[12px] text-[#3D3D3D]"
        >
          Stay
        </button>
        <button
          type="button"
          onClick={onCloseAnyway}
          className="rounded-[6px] border border-[#E7B100] px-[12px] py-[6px] text-[12px] text-[#7A5A00]"
        >
          Close Anyway
        </button>
      </div>
    </div>
  );
};

export default ProfileClosePrompt;
