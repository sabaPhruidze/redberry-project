import AuthModalFooter from "./AuthModalFooter";

type AuthSignUpStepOneSectionProps = {
  email: string;
  onEmailChange: (value: string) => void;
  onNext: () => void;
};

const AuthSignUpStepOneSection = ({
  email,
  onEmailChange,
  onNext,
}: AuthSignUpStepOneSectionProps) => {
  return (
    <div className="w-[360px]" style={{ fontFamily: "Inter, sans-serif" }}>
      <label
        htmlFor="signup-email"
        className="block h-[17px] w-[360px] text-[14px] leading-[100%]"
        style={{ fontWeight: 500, color: "#3D3D3D" }}
      >
        Email*
      </label>

      <div className="mt-[8px] flex h-[48px] w-[360px] items-center gap-[10px] rounded-[8px] border-[1.5px] border-[#D1D1D1] bg-white px-[13px] py-[12px] pr-[15px]">
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          placeholder="you@example.com"
          className="h-full w-full border-0 bg-transparent p-0 text-[14px] leading-[100%] text-[#141414] outline-none placeholder:text-[#8A8A8A]"
          style={{ fontWeight: 500 }}
        />
      </div>

      <button
        type="button"
        onClick={onNext}
        className="mt-[16px] flex h-[47px] w-[360px] items-center justify-center gap-[10px] rounded-[8px] bg-[#4F46E5] p-[10px] text-[16px] leading-[100%] text-white"
        style={{ fontWeight: 500 }}
      >
        Next
      </button>

      <AuthModalFooter />
    </div>
  );
};

export default AuthSignUpStepOneSection;
