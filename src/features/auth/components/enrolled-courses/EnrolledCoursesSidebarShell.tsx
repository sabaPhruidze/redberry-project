import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useLockBodyScroll } from "../../../../hooks/use-lock-body-scroll";

type EnrolledCoursesSidebarShellProps = {
  onClose?: () => void;
  children?: ReactNode;
};

const EnrolledCoursesSidebarShell = ({
  onClose,
  children,
}: EnrolledCoursesSidebarShellProps) => {
  // Dedicated enrolled-courses shell with right-sidebar motion and modal controls.
  useLockBodyScroll(true);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-end bg-[#00000040]"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.24 }}
    >
      <motion.aside
        role="dialog"
        aria-modal="true"
        className="h-[1080px] w-[794px] bg-[#F5F5F5]"
        onClick={(event) => event.stopPropagation()}
        initial={{ x: 794 }}
        animate={{ x: 0 }}
        exit={{ x: 794 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        {children}
      </motion.aside>
    </motion.div>
  );
};

export default EnrolledCoursesSidebarShell;
