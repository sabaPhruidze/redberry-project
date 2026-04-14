import { useMemo } from "react";
import useEnrollments from "../../../../../api/hooks/enrollments/useEnrollments";
import type { UseCourseDetailRightEnrollmentParams } from "../../../../../types/courseDetailRightHooks";

export const useCourseDetailRightEnrollment = ({
  courseId,
  courseEnrollment,
  isAuthenticated,
}: UseCourseDetailRightEnrollmentParams) => {
  const { data: enrollmentsData } = useEnrollments(isAuthenticated);
  const matchedEnrollment = useMemo(
    () =>
      enrollmentsData?.find((item) => item.course.id === courseId) ??
      courseEnrollment,
    [courseEnrollment, courseId, enrollmentsData],
  );
  const enrollmentId = matchedEnrollment?.id ?? null;
  const rawProgress = Number(matchedEnrollment?.progress);
  const enrollmentProgress = Number.isFinite(rawProgress)
    ? Math.min(100, Math.max(0, rawProgress))
    : 0;
  const isCourseCompleted = enrollmentProgress >= 100;
  const isEnrolled = enrollmentId != null;
  const enrolledSchedule = matchedEnrollment?.schedule;
  const enrolledLocation =
    enrolledSchedule?.location?.trim() ||
    enrolledSchedule?.sessionType.location?.trim() ||
    undefined;

  return {
    enrollmentId,
    enrollmentProgress,
    isCourseCompleted,
    isEnrolled,
    enrolledSchedule,
    enrolledLocation,
  };
};
