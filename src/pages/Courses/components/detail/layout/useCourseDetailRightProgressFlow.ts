import { useEffect } from "react";
import useCreateCourseReview from "../../../../../api/hooks/course-detail/useCreateCourseReview";
import useCompleteEnrollment from "../../../../../api/hooks/enrollments/useCompleteEnrollment";
import useDeleteEnrollment from "../../../../../api/hooks/enrollments/useDeleteEnrollment";
import type { UseCourseDetailRightProgressFlowParams } from "../../../../../types/courseDetailRightHooks";

export const useCourseDetailRightProgressFlow = ({
  courseId,
  courseIsRated,
  enrollmentId,
  isCourseCompleted,
  resetSelection,
  dispatchUiAction,
}: UseCourseDetailRightProgressFlowParams) => {
  const completeEnrollmentMutation = useCompleteEnrollment();
  const createCourseReviewMutation = useCreateCourseReview();
  const deleteEnrollmentMutation = useDeleteEnrollment();

  useEffect(() => {
    dispatchUiAction({ type: "SYNC_RATING_CARD_VISIBILITY", visible: isCourseCompleted });
  }, [courseId, courseIsRated, dispatchUiAction, isCourseCompleted]);

  const handleCompleteCourse = () => {
    if (enrollmentId == null || isCourseCompleted || completeEnrollmentMutation.isPending) return;
    completeEnrollmentMutation.mutate(enrollmentId, {
      onSuccess: () => dispatchUiAction({ type: "COMPLETE_COURSE_SUCCESS" }),
    });
  };
  const handleRetakeCourse = () => {
    if (enrollmentId == null || deleteEnrollmentMutation.isPending) return;
    dispatchUiAction({ type: "HIDE_RATING_CARD" });
    deleteEnrollmentMutation.mutate(enrollmentId, { onSuccess: resetSelection });
  };
  const handleRateCourse = async (rating: number) => {
    if (createCourseReviewMutation.isPending) return false;
    try {
      await createCourseReviewMutation.mutateAsync({ courseId, rating });
      return true;
    } catch {
      return false;
    }
  };

  return {
    isCompletePending: completeEnrollmentMutation.isPending,
    isRatingSubmitting: createCourseReviewMutation.isPending,
    handleCompleteCourse,
    handleRetakeCourse,
    handleRateCourse,
  };
};
