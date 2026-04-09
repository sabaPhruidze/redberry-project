import type { ReactNode } from "react";
import CLOSE_ICON from "../../../assets/icons/authentification/ic_round-close.svg";

type AuthModalShellProps = {
  children: ReactNode;
  onClose?: () => void;
  closeAriaLabel: string;
  closeOnOverlayClick?: boolean;
  leadingControl?: ReactNode;
};

const AuthModalShell = ({
  children,
  onClose,
  closeAriaLabel,
  closeOnOverlayClick = false,
  leadingControl,
}: AuthModalShellProps) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-[#00000040]"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div className="flex min-h-screen items-center justify-center">
        <section
          role="dialog"
          aria-modal="true"
          onClick={
            closeOnOverlayClick
              ? (event) => event.stopPropagation()
              : undefined
          }
          className="relative flex w-[460px] flex-col gap-[12px] rounded-[12px] bg-white p-[50px]"
        >
          {leadingControl}
          <button
            type="button"
            onClick={onClose}
            aria-label={closeAriaLabel}
            className="absolute flex h-6 w-6 items-center justify-center"
            style={{ top: "20.5px", right: "15px" }}
          >
            <img src={CLOSE_ICON} alt="" className="h-6 w-6" />
          </button>
          <div className="flex w-[360px] flex-col gap-[24px]">{children}</div>
        </section>
      </div>
    </div>
  );
};

export default AuthModalShell;
