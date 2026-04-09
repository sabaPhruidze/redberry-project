import CLOSE_ICON from "../../../assets/icons/authentification/ic_round-close.svg";
import { useSignUpModalState } from "../hooks/useSignUpModalState";
import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import useRegister from "../../../api/hooks/useRegister";
import { useAuthModal } from "../hooks/useAuthModal";
import AuthModalBackButton from "./AuthModalBackButton";
import AuthModalHeader from "./AuthModalHeader";
import AuthSignUpStepOneSection from "./AuthSignUpStepOneSection";
import AuthSignUpStepTwoSection from "./AuthSignUpStepTwoSection";
import AuthSignUpStepThreeSection from "./AuthSignUpStepThreeSection";
import AuthStepIndicator from "./AuthStepIndicator";
import type { SignUpFormValues } from "../types/signup";

type RegisterModalProps = {
  onClose?: () => void;
};

const RegisterModal = ({ onClose }: RegisterModalProps) => {
  const {
    currentStep,
    isStepOne,
    isStepTwo,
    isStepThree,
    signUpForm,
    goToStepTwo,
    goToStepThree,
    goBackStep,
    updateField,
    closeModal,
  } = useSignUpModalState({ onClose });
  const { switchToLoginModal } = useAuthModal();
  const registerMutation = useRegister();
  const signUpErrorText = registerMutation.isError
    ? "Registration failed. Please try again."
    : undefined;

  const updateSignUpField = <K extends keyof SignUpFormValues>(
    field: K,
    value: SignUpFormValues[K],
  ) => {
    if (registerMutation.isError) {
      registerMutation.reset();
    }

    updateField(field, value);
  };

  const handleSignUp = async () => {
    if (registerMutation.isPending) {
      return;
    }

    try {
      const response = await registerMutation.mutateAsync(signUpForm);
      localStorage.setItem("access_token", response.token);
      localStorage.setItem("auth_user", JSON.stringify(response.user));
      console.log("Registration successful:", response);
      closeModal();
    } catch (error) {
      console.log("Registration failed:", error);
    }
  };

  useLockBodyScroll(true);

  return (
    <div className="fixed inset-0 z-50 bg-[#00000040]">
      <div className="flex min-h-screen items-center justify-center">
        <section role="dialog" aria-modal="true" className="relative flex w-[460px] flex-col gap-[12px] rounded-[12px] bg-white p-[50px]">
          {!isStepOne && <AuthModalBackButton onClick={goBackStep} />}
          <button type="button" onClick={closeModal} aria-label="Close register modal" className="absolute flex h-6 w-6 items-center justify-center" style={{ top: "20.5px", right: "15px" }}>
            <img src={CLOSE_ICON} alt="" className="h-6 w-6" />
          </button>
          <div className="flex w-[360px] flex-col gap-[24px]">
            <AuthModalHeader title="Create Account" subtitle="Join and start learning today" />
            <AuthStepIndicator currentStep={currentStep} totalSteps={3} />
            {isStepOne && (
              <AuthSignUpStepOneSection
                email={signUpForm.email}
                onEmailChange={(value) => updateSignUpField("email", value)}
                onNext={goToStepTwo}
                onLogInClick={switchToLoginModal}
              />
            )}
            {isStepTwo && (
              <AuthSignUpStepTwoSection
                password={signUpForm.password}
                confirmPassword={signUpForm.confirmPassword}
                onPasswordChange={(value) =>
                  updateSignUpField("password", value)
                }
                onConfirmPasswordChange={(value) =>
                  updateSignUpField("confirmPassword", value)
                }
                onNext={goToStepThree}
                onLogInClick={switchToLoginModal}
              />
            )}
            {isStepThree && (
              <AuthSignUpStepThreeSection
                username={signUpForm.username}
                onUsernameChange={(value) =>
                  updateSignUpField("username", value)
                }
                onAvatarFileChange={(file) =>
                  updateSignUpField("avatarFile", file)
                }
                onSignUp={handleSignUp}
                onLogInClick={switchToLoginModal}
                isSigningUp={registerMutation.isPending}
                signUpError={signUpErrorText}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegisterModal;
