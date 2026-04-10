import { useEffect, type ReactNode } from "react";
import CLOSE_ICON from "../../../assets/icons/authentification/ic_round-close.svg";

type AuthModalShellProps = {
  children: ReactNode;
  onClose?: () => void;
  closeAriaLabel: string;
  closeOnOverlayClick?: boolean;
  leadingControl?: ReactNode;
  panelClassName?: string;
  contentClassName?: string;
  closeButtonClassName?: string;
  enableCloseActions?: boolean;
};

const AuthModalShell = ({
  children,
  onClose,
  closeAriaLabel,
  closeOnOverlayClick = false,
  leadingControl,
  panelClassName = "",
  contentClassName = "gap-[24px]",
  closeButtonClassName = "top-[20.5px] right-[15px]",
  enableCloseActions = true,
}: AuthModalShellProps) => {
  const canCloseFromOverlay = enableCloseActions && closeOnOverlayClick;

  useEffect(() => {
    if (!enableCloseActions || !onClose) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enableCloseActions, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#00000040]"
      onClick={canCloseFromOverlay ? onClose : undefined}
    >
      <div className="flex min-h-screen items-center justify-center">
        <section
          role="dialog"
          aria-modal="true"
          onClick={
            canCloseFromOverlay ? (event) => event.stopPropagation() : undefined
          }
          className={`relative flex w-[460px] flex-col gap-[12px] rounded-[12px] bg-white ${panelClassName}`}
        >
          {leadingControl}
          <button
            type="button"
            onClick={enableCloseActions ? onClose : undefined}
            aria-label={closeAriaLabel}
            className={`absolute flex h-6 w-6 items-center justify-center ${closeButtonClassName}`}
          >
            <img src={CLOSE_ICON} alt="" className="h-6 w-6" />
          </button>
          <div className={`flex w-[360px] flex-col ${contentClassName}`}>
            {children}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuthModalShell;
