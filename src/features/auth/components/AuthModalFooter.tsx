type AuthModalFooterProps = {
  questionText: string;
  actionText: string;
  onActionClick: () => void;
};

const AuthModalFooter = ({
  questionText,
  actionText,
  onActionClick,
}: AuthModalFooterProps) => {
  return (
    <div className="mt-[16px] flex w-[360px] flex-col gap-[8px]">
      <div className="grid w-[360px] place-items-center px-[20px]">
        <div className="col-start-1 row-start-1 h-px w-full bg-[#D1D1D1]" />
        <span
          className="col-start-1 row-start-1 flex h-[21px] w-[28px] items-center justify-center bg-white text-[14px] leading-[100%] text-[#8A8A8A]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          or
        </span>
      </div>

      <div className="flex h-[17px] w-[360px] items-center justify-center gap-[8px] px-[60px]">
        <p
          className="text-[14px] leading-[100%] text-[#666666]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
        >
          {questionText}
        </p>
        <button
          type="button"
          onClick={onActionClick}
          className="text-[14px] leading-[100%] text-[#141414] underline"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          {actionText}
        </button>
      </div>
    </div>
  );
};

export default AuthModalFooter;
