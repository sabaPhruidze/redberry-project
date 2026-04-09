import AuthModalFooter from "./AuthModalFooter";
import AuthEmailInputField from "./AuthEmailInputField";

type AuthSignUpStepOneSectionProps = {
  email: string;
  emailError?: string;
  onEmailChange: (value: string) => void;
  onNext: () => void;
  onLogInClick: () => void;
};

const AuthSignUpStepOneSection = ({
  email,
  emailError,
  onEmailChange,
  onNext,
  onLogInClick,
}: AuthSignUpStepOneSectionProps) => {
  return (
    <div className="w-[360px]" style={{ fontFamily: "Inter, sans-serif" }}>
      <AuthEmailInputField
        id="signup-email"
        label="Email*"
        value={email}
        placeholder="you@example.com"
        autoComplete="email"
        error={emailError}
        onChange={onEmailChange}
      />

      <button
        type="button"
        onClick={onNext}
        className="mt-[16px] flex h-[47px] w-[360px] items-center justify-center gap-[10px] rounded-[8px] bg-[#4F46E5] p-[10px] text-[16px] leading-[100%] text-white"
        style={{ fontWeight: 500 }}
      >
        Next
      </button>

      <AuthModalFooter
        questionText="Already have an account?"
        actionText="Log In"
        onActionClick={onLogInClick}
      />
    </div>
  );
};

export default AuthSignUpStepOneSection;
