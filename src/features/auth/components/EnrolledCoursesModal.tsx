// Enrolled courses modal currently renders only the exact sidebar empty-state layout.
import EnrolledCoursesEmptyState from "./EnrolledCoursesEmptyState";
import EnrolledCoursesPanelHeader from "./EnrolledCoursesPanelHeader";
import EnrolledCoursesSidebarShell from "./EnrolledCoursesSidebarShell";

type EnrolledCoursesModalProps = {
  onClose?: () => void;
};

const EnrolledCoursesModal = ({ onClose }: EnrolledCoursesModalProps) => {
  const handleBrowseCourses = () => {
    onClose?.();

    if (typeof window !== "undefined") {
      window.location.assign("/courses/catalog");
    }
  };

  return (
    <EnrolledCoursesSidebarShell onClose={onClose}>
      <div className="h-full w-full px-[74px] pb-[60px] pt-[60px]">
        <div className="flex w-[646px] flex-col gap-[45px]">
          <EnrolledCoursesPanelHeader totalEnrollments={0} />
          <div className="flex h-[876px] w-[646px] flex-col gap-[32px]">
            <EnrolledCoursesEmptyState onBrowseCourses={handleBrowseCourses} />
          </div>
        </div>
      </div>
    </EnrolledCoursesSidebarShell>
  );
};

export default EnrolledCoursesModal;
