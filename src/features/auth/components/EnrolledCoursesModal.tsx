import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import AuthModalHeader from "./AuthModalHeader";
import AuthModalShell from "./AuthModalShell";

type EnrolledCoursesModalProps = {
  onClose?: () => void;
};

const EnrolledCoursesModal = ({ onClose }: EnrolledCoursesModalProps) => {
  useLockBodyScroll(true);

  return (
    <AuthModalShell
      onClose={onClose}
      closeAriaLabel="Close enrolled courses panel"
      closeOnOverlayClick
    >
      <AuthModalHeader
        title="Enrolled Courses"
        subtitle="Continue your learning journey"
      />
    </AuthModalShell>
  );
};

export default EnrolledCoursesModal;
