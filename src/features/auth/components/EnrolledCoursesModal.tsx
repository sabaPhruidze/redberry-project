import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import useInProgressCourses from "../../../api/hooks/useInProgressCourses";
import Button from "../../../components/ui/Button";
import AuthModalHeader from "./AuthModalHeader";
import AuthModalShell from "./AuthModalShell";
import EnrolledCoursesConfirmBox from "./EnrolledCoursesConfirmBox";
import EnrolledCoursesEmptyState from "./EnrolledCoursesEmptyState";
import EnrolledCourseListItem from "./EnrolledCourseListItem";
import EnrolledCoursesSummary from "./EnrolledCoursesSummary";

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
  useLockBodyScroll(true);
  const navigate = useNavigate();
  const isAuthenticated = getIsAuthenticated();
  const { data, isLoading, isError, error } = useInProgressCourses(isAuthenticated);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [completionMessage, setCompletionMessage] = useState<string>();

  const enrolledCourses = data ?? [];
  const hasEnrollments = enrolledCourses.length > 0;
  const totalPrice = useMemo(
    () => enrolledCourses.reduce((sum, course) => sum + Number(course.totalPrice || 0), 0),
    [enrolledCourses],
  );

  const handleBrowseCourses = () => {
    onClose?.();
    navigate("/courses/catalog");
  };

  const handleViewCourse = (courseId: number) => {
    onClose?.();
    navigate(`/courses/${courseId}`);
  };

  const handleConfirmCompletion = () => {
    setIsConfirmOpen(false);
    setCompletionMessage(
      "Enrollment completion endpoint is not available yet. UI flow is ready for API connection.",
    );
  };

  return (
    <AuthModalShell
      onClose={onClose}
      closeAriaLabel="Close enrolled courses panel"
      closeOnOverlayClick
      panelClassName="p-[26px]"
      contentClassName="gap-[14px]"
      overlayClassName="backdrop-blur-[2px]"
    >
      <AuthModalHeader
        title="Enrolled Courses"
        subtitle="Continue your learning journey"
      />
      {isLoading ? (
        <p className="text-[14px] text-[#666666]">Loading enrollments...</p>
      ) : null}
      {isError ? (
        <p className="text-[14px] text-[#F4161A]">
          {error instanceof Error ? error.message : "Failed to load enrollments."}
        </p>
      ) : null}
      {!isLoading && !isError && !hasEnrollments ? (
        <EnrolledCoursesEmptyState onBrowseCourses={handleBrowseCourses} />
      ) : null}
      {!isLoading && !isError && hasEnrollments ? (
        <>
          <ul className="flex max-h-[250px] w-[360px] flex-col gap-[8px] overflow-y-auto pr-[2px]">
            {enrolledCourses.map((course) => (
              <EnrolledCourseListItem key={course.id} item={course} onViewCourse={handleViewCourse} />
            ))}
          </ul>
          <EnrolledCoursesSummary courseCount={enrolledCourses.length} totalPrice={totalPrice} />
          <Button
            text="Complete Enrollment"
            classname="w-[360px] text-[16px]"
            onClick={() => setIsConfirmOpen(true)}
          />
        </>
      ) : null}
      {isConfirmOpen ? (
        <EnrolledCoursesConfirmBox onCancel={() => setIsConfirmOpen(false)} onConfirm={handleConfirmCompletion} />
      ) : null}
      {completionMessage ? (
        <p className="w-[360px] rounded-[8px] border border-[#D1D1D1] bg-[#FAFAFA] p-[10px] text-[12px] leading-[140%] text-[#3D3D3D]">
          {completionMessage}
        </p>
      ) : null}
    </AuthModalShell>
  );
};

export default EnrolledCoursesModal;
