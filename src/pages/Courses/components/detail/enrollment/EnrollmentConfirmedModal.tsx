import CourseFeedbackModalShell from "./CourseFeedbackModalShell";

type EnrollmentConfirmedModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const EnrollmentConfirmedModal = ({
  isOpen,
  onClose,
}: EnrollmentConfirmedModalProps) => {
  // Enrollment success modal frame only; content is intentionally empty for now.
  return (
    <CourseFeedbackModalShell
      isOpen={isOpen}
      onClose={onClose}
      width={476}
      height={471}
    />
  );
};

export default EnrollmentConfirmedModal;
