import { useEffect, type ReactNode } from "react";
import { useLockBodyScroll } from "../../../../../hooks/use-lock-body-scroll";

type CourseFeedbackModalShellProps = {
  isOpen: boolean;
  width: number;
  height: number;
  onClose: () => void;
  children?: ReactNode;
};

const CourseFeedbackModalShell = ({
  isOpen,
  width,
  height,
  onClose,
  children,
}: CourseFeedbackModalShellProps) => {
  // Dedicated shell for course feedback modals with fixed size and dismiss actions.
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#00000040]"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        className="rounded-[16px] bg-white p-[60px]"
        style={{ width, height }}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </section>
    </div>
  );
};

export default CourseFeedbackModalShell;
