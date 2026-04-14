import CourseFeedbackModalShell from "./CourseFeedbackModalShell";

type CourseCompletedModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CourseCompletedModal = ({ isOpen, onClose }: CourseCompletedModalProps) => {
  // Completion feedback modal frame only; content is added in the next step.
  return (
    <CourseFeedbackModalShell
      isOpen={isOpen}
      onClose={onClose}
      width={476}
      height={575}
    />
  );
};

export default CourseCompletedModal;
