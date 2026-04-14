// Enrolled courses modal keeps shell/timing unchanged and switches by real enrollments state.
import { useEffect } from "react";
import EnrolledCoursesEmptyState from "./EnrolledCoursesEmptyState";
import EnrolledCourseCard from "./EnrolledCourseCard";
import EnrolledCoursesPanelHeader from "./EnrolledCoursesPanelHeader";
import EnrolledCoursesSidebarShell from "./EnrolledCoursesSidebarShell";
import useEnrollments from "../../../../api/hooks/enrollments/useEnrollments";

type EnrolledCoursesModalProps = {
  onClose?: () => void;
};

const getIsAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(localStorage.getItem("access_token"));
};

const EnrolledCoursesModal = ({ onClose }: EnrolledCoursesModalProps) => {
  const isAuthenticated = getIsAuthenticated();
  const { data: enrollmentsData = [], refetch } =
    useEnrollments(isAuthenticated);
  const totalEnrollments = enrollmentsData?.length ?? 0;

  const hasEnrollments = totalEnrollments > 0;

  useEffect(() => {
    if (isAuthenticated) {
      void refetch();
    }
  }, [isAuthenticated, refetch]);

  const handleBrowseCourses = () => {
    onClose?.();

    if (typeof window !== "undefined") {
      window.location.assign("/courses/catalog");
    }
  };

  const handleViewCourse = (courseId: number) => {
    onClose?.();

    if (typeof window !== "undefined") {
      window.location.assign(`/courses/${courseId}`);
    }
  };

  return (
    <EnrolledCoursesSidebarShell onClose={onClose}>
      <div className="h-full w-full px-[74px] pb-[60px] pt-[60px]">
        <div className="flex w-[646px] flex-col gap-[45px]">
          <EnrolledCoursesPanelHeader totalEnrollments={totalEnrollments} />
          <div className="h-[876px] w-[646px]">
            {hasEnrollments ? (
              <div className="h-full w-full overflow-y-auto pr-[4px]">
                <div className="flex w-full flex-col gap-[16px]">
                  {enrollmentsData.map((item) => (
                    <EnrolledCourseCard
                      key={item.id}
                      item={item}
                      onView={handleViewCourse}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <EnrolledCoursesEmptyState
                onBrowseCourses={handleBrowseCourses}
              />
            )}
          </div>
        </div>
      </div>
    </EnrolledCoursesSidebarShell>
  );
};

export default EnrolledCoursesModal;
