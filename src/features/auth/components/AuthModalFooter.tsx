const AuthModalFooter = () => {
  return (
    <div className="mt-[16px] flex h-[46px] w-[360px] flex-col gap-[8px]">
      <div className="relative mx-[20px] h-[21px] w-[320px]">
        <div className="absolute left-0 right-0 top-1/2 border-t border-[#D1D1D1]" />
        <span
          className="absolute left-1/2 top-1/2 flex h-[24px] w-[14px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white text-[14px] leading-[100%] text-[#8A8A8A]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          or
        </span>
      </div>

      <div className="flex w-[360px] items-center justify-center">
        <p
          className="h-[15px] w-[147px] text-center text-[12px] leading-[100%] text-[#666666]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
        >
          Already have an account?
        </p>
        <button
          type="button"
          className="ml-[6px] h-[17px] w-[41px] text-center text-[14px] leading-[100%] text-[#141414] underline"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default AuthModalFooter;
