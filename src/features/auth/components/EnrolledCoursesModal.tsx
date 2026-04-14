import EnrolledCoursesSidebarShell from "./EnrolledCoursesSidebarShell";

type EnrolledCoursesModalProps = {
  onClose?: () => void;
};

const EnrolledCoursesModal = ({ onClose }: EnrolledCoursesModalProps) => {
  // Temporary enrolled-courses modal body; content cards are added in the next step.
  return (
    <EnrolledCoursesSidebarShell onClose={onClose}>
      <div className="h-full w-full" />
    </EnrolledCoursesSidebarShell>
  );
};

export default EnrolledCoursesModal;
