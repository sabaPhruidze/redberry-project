import axios from "axios";
import useCreateEnrollment from "../../../../../api/hooks/enrollments/useCreateEnrollment";
import type {
  CreateEnrollmentConflictError,
  CreateEnrollmentRequest,
} from "../../../../../types/enrollments";
import type { UseCourseDetailRightEnrollmentFlowParams } from "../../../../../types/courseDetailRightHooks";

export const useCourseDetailRightEnrollmentFlow = ({
  courseId,
  selectedCourseScheduleId,
  isEnrollActionActive,
  uiState,
  dispatchUiAction,
}: UseCourseDetailRightEnrollmentFlowParams) => {
  const createEnrollmentMutation = useCreateEnrollment();
  const conflictState =
    uiState.modalState.type === "conflict" ? uiState.modalState.data : null;
  const submitEnrollment = (payload: CreateEnrollmentRequest) =>
    createEnrollmentMutation.mutate(payload, {
      onSuccess: () => dispatchUiAction({ type: "ENROLLMENT_SUCCESS" }),
      onError: (error) => {
        if (!axios.isAxiosError<CreateEnrollmentConflictError>(error)) return;
        if (error.response?.status !== 409) return;
        const firstConflict = error.response.data?.conflicts?.[0];
        dispatchUiAction({
          type: "ENROLLMENT_CONFLICT",
          conflict: {
            payload,
            message: error.response.data?.message ?? "Schedule conflict detected",
            conflictingCourseName: firstConflict?.conflictingCourseName,
            conflictingSchedule: firstConflict?.schedule,
          },
        });
      },
    });

  return {
    isEnrollPending: createEnrollmentMutation.isPending,
    conflictState,
    handleEnroll: () =>
      isEnrollActionActive && selectedCourseScheduleId != null
        ? submitEnrollment({ courseId, courseScheduleId: selectedCourseScheduleId, force: false })
        : undefined,
    handleConflictCancel: () => dispatchUiAction({ type: "DISMISS_CONFLICT" }),
    handleConflictContinue: () =>
      conflictState ? submitEnrollment({ ...conflictState.payload, force: true }) : undefined,
  };
};
