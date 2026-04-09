import AuthModalFooter from "./AuthModalFooter";
import AuthPasswordInputField from "./AuthPasswordInputField";
import AuthUploadAvatarField from "./AuthUploadAvatarField";

type AuthSignUpStepThreeSectionProps = {
  username: string;
  usernameError?: string;
  onUsernameChange: (value: string) => void;
  onAvatarFileChange: (file: File | null) => void;
  onSignUp: () => void;
  onLogInClick: () => void;
  isSigningUp?: boolean;
  signUpError?: string;
};

const AuthSignUpStepThreeSection = ({
  username,
  usernameError,
  onUsernameChange,
  onAvatarFileChange,
  onSignUp,
  onLogInClick,
  isSigningUp = false,
  signUpError,
}: AuthSignUpStepThreeSectionProps) => {
  return (
    <div className="w-[360px]" style={{ fontFamily: "Inter, sans-serif" }}>
      <AuthPasswordInputField
        id="signup-username"
        label="Username*"
        value={username}
        placeholder="Username"
        autoComplete="username"
        labelColor="#3D3D3D"
        error={usernameError}
        onChange={onUsernameChange}
      />
      <AuthUploadAvatarField showTopSpacing onFileSelect={onAvatarFileChange} />
      <button
        type="button"
        disabled={isSigningUp}
        onClick={onSignUp}
        className="mt-[16px] flex h-[47px] w-[360px] items-center justify-center rounded-[8px] bg-[#4F46E5] p-[10px] text-[16px] leading-[100%] text-white"
        style={{ fontWeight: 500 }}
      >
        {isSigningUp ? "Signing Up..." : "Sign Up"}
      </button>
      {signUpError ? (
        <p className="mt-[8px] text-[12px] leading-[100%] text-[#F4161A]" style={{ fontWeight: 400 }}>
          {signUpError}
        </p>
      ) : null}
      <div className="mt-[13px]">
        <AuthModalFooter
          questionText="Already have an account?"
          actionText="Log In"
          onActionClick={onLogInClick}
        />
      </div>
    </div>
  );
};

export default AuthSignUpStepThreeSection;
