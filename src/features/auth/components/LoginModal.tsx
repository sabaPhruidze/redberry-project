import { useState } from "react";
import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import { useAuthModal } from "../hooks/useAuthModal";
import AuthModalShell from "./AuthModalShell";
import AuthModalHeader from "./AuthModalHeader";
import LoginModalFormContent from "./LoginModalFormContent";
import { useLoginModalForm } from "../hooks/useLoginModalForm";

type LoginModalProps = {
  onClose?: () => void;
};

const LoginModal = ({ onClose }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { switchToRegisterModal } = useAuthModal();
  const {
    control,
    errors,
    isPending,
    loginErrorText,
    resetLoginError,
    onSubmit,
  } = useLoginModalForm({ onSuccess: onClose });

  useLockBodyScroll(true);

  return (
    <AuthModalShell
      onClose={onClose}
      closeAriaLabel="Close login modal"
      closeOnOverlayClick
    >
      <AuthModalHeader title="Log In" subtitle="Welcome back, continue learning" />
      <LoginModalFormContent
        control={control}
        errors={errors}
        isPending={isPending}
        loginErrorText={loginErrorText}
        onSubmit={onSubmit}
        onResetError={resetLoginError}
        onSwitchToRegister={switchToRegisterModal}
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword((prev) => !prev)}
      />
    </AuthModalShell>
  );
};

export default LoginModal;
