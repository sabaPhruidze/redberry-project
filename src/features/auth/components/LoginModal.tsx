import CLOSE_ICON from "../../../assets/icons/authentification/ic_round-close.svg";
import AuthModalHeader from "./AuthModalHeader";
import AuthStepIndicator from "./AuthStepIndicator";

type LoginModalProps = {
  onClose?: () => void;
};

const LoginModal = ({ onClose }: LoginModalProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#00000040]">
      <div className="flex min-h-screen items-center justify-center">
        <section
          role="dialog"
          aria-modal="true"
          className="relative w-[460px] h-[416px] rounded-[12px] bg-white p-[50px] "
        >
          <button
            type="button"
            onClick={onClose}
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
            <AuthStepIndicator currentStep={1} totalSteps={3} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginModal;
