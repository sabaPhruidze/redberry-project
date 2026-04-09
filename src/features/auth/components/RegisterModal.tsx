import { useSignUpModalState } from "../hooks/useSignUpModalState";
import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import { useAuthModal } from "../hooks/useAuthModal";
import AuthModalShell from "./AuthModalShell";
import AuthModalBackButton from "./AuthModalBackButton";
import AuthModalHeader from "./AuthModalHeader";
import AuthStepIndicator from "./AuthStepIndicator";
import RegisterModalStepContent from "./RegisterModalStepContent";
import { useRegisterModalForm } from "../hooks/useRegisterModalForm";

type RegisterModalProps = {
  onClose?: () => void;
};

const RegisterModal = ({ onClose }: RegisterModalProps) => {
  const {
    currentStep,
    isStepOne,
    goToStepTwo,
    goToStepThree,
    goBackStep,
    closeModal,
  } = useSignUpModalState({ onClose });
  const { switchToLoginModal } = useAuthModal();
  const {
    values,
    errors,
    isSigningUp,
    signUpErrorText,
    updateFormField,
    goToNextStepFromOne,
    goToNextStepFromTwo,
    handleSignUp,
  } = useRegisterModalForm({
    onSuccess: closeModal,
    goToStepTwo,
    goToStepThree,
  });

  useLockBodyScroll(true);

  return (
    <AuthModalShell
      onClose={closeModal}
      closeAriaLabel="Close register modal"
      leadingControl={
        !isStepOne ? <AuthModalBackButton onClick={goBackStep} /> : undefined
      }
    >
      <AuthModalHeader title="Create Account" subtitle="Join and start learning today" />
      <AuthStepIndicator currentStep={currentStep} totalSteps={3} />
      <RegisterModalStepContent
        currentStep={currentStep}
        values={values}
        errors={errors}
        onEmailChange={(value) => updateFormField("email", value)}
        onPasswordChange={(value) => updateFormField("password", value)}
        onConfirmPasswordChange={(value) =>
          updateFormField("confirmPassword", value)
        }
        onUsernameChange={(value) => updateFormField("username", value)}
        onAvatarFileChange={(file) => updateFormField("avatar", file)}
        onStepOneNext={goToNextStepFromOne}
        onStepTwoNext={goToNextStepFromTwo}
        onSignUp={() => {
          void handleSignUp();
        }}
        onLogInClick={switchToLoginModal}
        isSigningUp={isSigningUp}
        signUpError={signUpErrorText}
      />
    </AuthModalShell>
  );
};

export default RegisterModal;
