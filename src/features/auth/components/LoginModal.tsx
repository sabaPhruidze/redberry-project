import CLOSE_ICON from "../../../assets/icons/authentification/ic_round-close.svg";
import { useSignUpModalState } from "../hooks/useSignUpModalState";
import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import AuthModalBackButton from "./AuthModalBackButton";
import AuthModalHeader from "./AuthModalHeader";
import AuthSignUpStepOneSection from "./AuthSignUpStepOneSection";
import AuthSignUpStepTwoSection from "./AuthSignUpStepTwoSection";
import AuthStepIndicator from "./AuthStepIndicator";

type LoginModalProps = {
  onClose?: () => void;
};

const LoginModal = ({ onClose }: LoginModalProps) => {
  const {
    currentStep,
    isStepOne,
    isStepTwo,
    signUpForm,
    goToStepTwo,
    goToStepThree,
    goBackToStepOne,
    updateField,
    closeModal,
  } = useSignUpModalState({ onClose });
  useLockBodyScroll(true);

  return (
    <div className="fixed inset-0 z-50 bg-[#00000040]">
      <div className="flex min-h-screen items-center justify-center">
        <section
          role="dialog"
          aria-modal="true"
          className="relative w-[460px] rounded-[12px] bg-white p-[50px]"
          style={{ minHeight: isStepTwo ? "513px" : undefined }}
        >
          {isStepTwo && <AuthModalBackButton onClick={goBackToStepOne} />}
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close auth modal"
            className="absolute flex h-6 w-6 items-center justify-center"
            style={{ top: "20.5px", right: "15px" }}
          >
            <img src={CLOSE_ICON} alt="" className="h-6 w-6" />
          </button>
          <div className="flex w-[360px] flex-col gap-[24px]">
            <AuthModalHeader
              title="Create Account"
              subtitle="Join and start learning today"
            />
            <AuthStepIndicator currentStep={currentStep} totalSteps={3} />
            {isStepOne && (
              <AuthSignUpStepOneSection
                email={signUpForm.email}
                onEmailChange={(value) => updateField("email", value)}
                onNext={goToStepTwo}
              />
            )}
            {isStepTwo && (
              <AuthSignUpStepTwoSection
                password={signUpForm.password}
                confirmPassword={signUpForm.confirmPassword}
                onPasswordChange={(value) => updateField("password", value)}
                onConfirmPasswordChange={(value) =>
                  updateField("confirmPassword", value)
                }
                onNext={goToStepThree}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginModal;
