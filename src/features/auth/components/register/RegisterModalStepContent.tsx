import type { FieldErrors } from "react-hook-form";
import AuthSignUpStepOneSection from "./AuthSignUpStepOneSection";
import AuthSignUpStepTwoSection from "./AuthSignUpStepTwoSection";
import AuthSignUpStepThreeSection from "./AuthSignUpStepThreeSection";
import type { RegisterFormValues } from "../../schemas/register.schema";

type RegisterModalStepContentProps = {
  currentStep: 1 | 2 | 3;
  values: {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
  };
  errors: FieldErrors<RegisterFormValues>;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onUsernameChange: (value: string) => void;
  onAvatarFileChange: (file: File | null) => void;
  onStepOneNext: () => void;
  onStepTwoNext: () => void;
  onSignUp: () => void;
  onLogInClick: () => void;
  isSigningUp: boolean;
  signUpError?: string;
};

const RegisterModalStepContent = ({
  currentStep,
  values,
  errors,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onUsernameChange,
  onAvatarFileChange,
  onStepOneNext,
  onStepTwoNext,
  onSignUp,
  onLogInClick,
  isSigningUp,
  signUpError,
}: RegisterModalStepContentProps) => {
  if (currentStep === 1) {
    return (
      <AuthSignUpStepOneSection
        email={values.email}
        emailError={errors.email?.message}
        onEmailChange={onEmailChange}
        onNext={onStepOneNext}
        onLogInClick={onLogInClick}
      />
    );
  }

  if (currentStep === 2) {
    return (
      <AuthSignUpStepTwoSection
        password={values.password}
        confirmPassword={values.confirmPassword}
        passwordError={errors.password?.message}
        confirmPasswordError={errors.confirmPassword?.message}
        onPasswordChange={onPasswordChange}
        onConfirmPasswordChange={onConfirmPasswordChange}
        onNext={onStepTwoNext}
        onLogInClick={onLogInClick}
      />
    );
  }

  return (
    <AuthSignUpStepThreeSection
      username={values.username}
      usernameError={errors.username?.message}
      onUsernameChange={onUsernameChange}
      onAvatarFileChange={onAvatarFileChange}
      onSignUp={onSignUp}
      onLogInClick={onLogInClick}
      isSigningUp={isSigningUp}
      signUpError={signUpError}
    />
  );
};

export default RegisterModalStepContent;
