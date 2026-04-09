import CLOSE_ICON from "../../../assets/icons/authentification/ic_round-close.svg";
import { useState } from "react";
import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import { useAuthModal } from "../hooks/useAuthModal";
import AuthModalHeader from "./AuthModalHeader";
import AuthPasswordInputField from "./AuthPasswordInputField";
import AuthModalFooter from "./AuthModalFooter";
import EYE_OPENED_ICON from "../../../assets/icons/authentification/Eye_opened.svg?react";
import EYE_CLOSED_ICON from "../../../assets/icons/authentification/Eye_closed.svg?react";

type LoginModalProps = {
  onClose?: () => void;
};

const LoginModal = ({ onClose }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { switchToRegisterModal } = useAuthModal();

  useLockBodyScroll(true);

  return (
    <div className="fixed inset-0 z-50 bg-[#00000040]">
      <div className="flex min-h-screen items-center justify-center">
        <section role="dialog" aria-modal="true" className="relative flex w-[460px] flex-col gap-[12px] rounded-[12px] bg-white p-[50px]">
          <button type="button" onClick={onClose} aria-label="Close login modal" className="absolute flex h-6 w-6 items-center justify-center" style={{ top: "20.5px", right: "15px" }}>
            <img src={CLOSE_ICON} alt="" className="h-6 w-6" />
          </button>
          <div className="flex w-[360px] flex-col gap-[24px]">
            <AuthModalHeader title="Log In" subtitle="Welcome back, continue learning" />
            <div className="w-[360px]" style={{ fontFamily: "Inter, sans-serif" }}>
              <label
                htmlFor="login-email"
                className="block h-[17px] w-[360px] text-[14px] leading-[100%]"
                style={{ fontWeight: 500, color: "#3D3D3D" }}
              >
                Email*
              </label>
              <div className="mt-[8px] flex h-[48px] w-[360px] items-center gap-[10px] rounded-[8px] border-[1.5px] border-[#D1D1D1] bg-white px-[13px] py-[12px] pr-[15px]">
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="h-full w-full border-0 bg-transparent p-0 text-[14px] leading-[100%] text-[#141414] outline-none placeholder:text-[#8A8A8A]"
                  style={{ fontWeight: 500 }}
                />
              </div>
              <AuthPasswordInputField
                id="login-password"
                label="Password*"
                value={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                icon={showPassword ? EYE_OPENED_ICON : EYE_CLOSED_ICON}
                ariaLabel="Toggle password visibility"
                showTopSpacing
                labelColor="#3D3D3D"
                onChange={setPassword}
                onToggleVisibility={() => setShowPassword((prev) => !prev)}
              />
              <button
                type="button"
                className="mt-[16px] flex h-[47px] w-[360px] items-center justify-center rounded-[8px] bg-[#4F46E5] p-[10px] text-[16px] leading-[100%] text-white"
                style={{ fontWeight: 500 }}
              >
                Log In
              </button>
              <AuthModalFooter
                questionText="Don't have an account?"
                actionText="Sign Up"
                onActionClick={switchToRegisterModal}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginModal;
