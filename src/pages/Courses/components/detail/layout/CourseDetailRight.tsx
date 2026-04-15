import CourseDetailRightEnrolledSection from "./CourseDetailRightEnrolledSection";
import CourseDetailRightModals from "./CourseDetailRightModals";
import CourseDetailRightScheduleSection from "./CourseDetailRightScheduleSection";
import { useCourseDetailRightAccess } from "./useCourseDetailRightAccess";
import { useCourseDetailRightEnrollment } from "./useCourseDetailRightEnrollment";
import { useCourseDetailRightEnrollmentFlow } from "./useCourseDetailRightEnrollmentFlow";
import { useCourseDetailRightProgressFlow } from "./useCourseDetailRightProgressFlow";
import { useCourseDetailRightSchedule } from "./useCourseDetailRightSchedule";
import { useCourseDetailRightUi } from "./useCourseDetailRightUi";
import type { CourseDetailRightProps } from "../../../../../types/courseDetailRight";

const CourseDetailRight = ({
  courseId,
  courseTitle,
  courseBasePrice,
  courseEnrollment,
  courseIsRated = false,
}: CourseDetailRightProps) => {
  const [uiState, dispatchUiAction] = useCourseDetailRightUi();
  const access = useCourseDetailRightAccess();

  const schedule = useCourseDetailRightSchedule({
    courseId,
    courseBasePrice,
  });

  const enrollment = useCourseDetailRightEnrollment({
    courseId,
    courseEnrollment,
    isAuthenticated: access.isAuthenticated,
  });

  const selectedCourseScheduleId =
    schedule.selection.selectedSessionType?.courseScheduleId ?? null;

  const isScheduleSelectionComplete =
    schedule.selection.selectedWeeklyScheduleId != null &&
    schedule.selection.selectedTimeSlotId != null &&
    schedule.selection.selectedSessionTypeId != null &&
    selectedCourseScheduleId != null;

  const isEnrollActionActive =
    !enrollment.isEnrolled && isScheduleSelectionComplete;

  const enrollmentFlow = useCourseDetailRightEnrollmentFlow({
    courseId,
    selectedCourseScheduleId,
    isScheduleSelectionComplete,
    isAuthenticated: access.isAuthenticated,
    isProfileComplete: access.isProfileComplete,
    openLoginModal: access.openLoginModal,
    openProfileModal: access.openProfileModal,
    uiState,
    dispatchUiAction,
  });

  const progressFlow = useCourseDetailRightProgressFlow({
    courseId,
    courseIsRated,
    enrollmentId: enrollment.enrollmentId,
    isCourseCompleted: enrollment.isCourseCompleted,
    resetSelection: schedule.selection.resetSelection,
    dispatchUiAction,
  });

  const weeklyLabel =
    schedule.displayWeeklySchedules
      .find((item) => item.id === schedule.selection.selectedWeeklyScheduleId)
      ?.label?.trim() ?? "";

  const timeLabel =
    schedule.displayTimeSlots
      .find((item) => item.id === schedule.selection.selectedTimeSlotId)
      ?.label?.trim() ?? "";

  const derivedSchedule =
    weeklyLabel && timeLabel
      ? `${weeklyLabel} at ${timeLabel}`
      : weeklyLabel || timeLabel;

  const conflictCourseTitle =
    enrollmentFlow.conflictState?.conflictingCourseName?.trim() ||
    "another course";

  const conflictScheduleLabel =
    enrollmentFlow.conflictState?.conflictingSchedule?.trim() ||
    derivedSchedule ||
    "selected schedule";

  return (
    <div className="mt-[130px] flex w-[530px] flex-col gap-[32px]">
      {enrollment.isEnrolled ? (
        <CourseDetailRightEnrolledSection
          isCourseCompleted={enrollment.isCourseCompleted}
          enrollmentProgress={enrollment.enrollmentProgress}
          weeklyScheduleLabel={
            enrollment.enrolledSchedule?.weeklySchedule.label ?? ""
          }
          timeSlotLabel={enrollment.enrolledSchedule?.timeSlot.label ?? ""}
          sessionTypeLabel={enrollment.enrolledSchedule?.sessionType.name ?? ""}
          locationLabel={enrollment.enrolledLocation}
          courseIsRated={courseIsRated}
          isRatingCardVisible={uiState.isRatingCardVisible}
          isCompletePending={progressFlow.isCompletePending}
          isRatingSubmitting={progressFlow.isRatingSubmitting}
          onCompleteCourse={progressFlow.handleCompleteCourse}
          onRetakeCourse={progressFlow.handleRetakeCourse}
          onHideRatingCard={() =>
            dispatchUiAction({ type: "HIDE_RATING_CARD" })
          }
          onRateCourse={progressFlow.handleRateCourse}
        />
      ) : (
        <CourseDetailRightScheduleSection
          courseBasePrice={courseBasePrice}
          weeklyOptions={schedule.displayWeeklySchedules}
          timeSlotOptions={schedule.displayTimeSlots}
          sessionTypeOptions={schedule.displaySessionTypes}
          selectedWeeklyScheduleId={schedule.selection.selectedWeeklyScheduleId}
          selectedTimeSlotId={schedule.selection.selectedTimeSlotId}
          selectedSessionTypeId={schedule.selection.selectedSessionTypeId}
          isWeeklyOpen={schedule.accordion.isWeeklyScheduleOpen}
          isTimeSlotOpen={schedule.accordion.isTimeSlotOpen}
          isSessionTypeOpen={schedule.accordion.isSessionTypeOpen}
          sessionTypeModifier={schedule.selection.sessionTypeModifier}
          totalPrice={schedule.selection.totalPrice}
          isEnrollActionActive={isEnrollActionActive}
          isEnrollPending={enrollmentFlow.isEnrollPending}
          noticeVariant={access.noticeVariant}
          onWeeklySelect={schedule.selection.handleWeeklyScheduleChange}
          onTimeSlotSelect={schedule.selection.handleTimeSlotChange}
          onSessionTypeSelect={schedule.selection.handleSessionTypeChange}
          onToggleWeekly={schedule.accordion.toggleWeeklySchedule}
          onToggleTimeSlot={schedule.accordion.toggleTimeSlot}
          onToggleSessionType={schedule.accordion.toggleSessionType}
          onEnroll={enrollmentFlow.handleEnroll}
          onOpenLogin={access.openLoginModal}
          onOpenProfile={access.openProfileModal}
        />
      )}

      <CourseDetailRightModals
        isConflictOpen={uiState.modalState.type === "conflict"}
        isConfirmedOpen={uiState.modalState.type === "confirmed"}
        isCompletedOpen={uiState.modalState.type === "completed"}
        conflictCourseTitle={conflictCourseTitle}
        conflictScheduleLabel={conflictScheduleLabel}
        enrollmentConfirmedCourseTitle={courseTitle.trim() || "Course"}
        completedCourseTitle={courseTitle.trim() || "Course"}
        completedModalRatingValue={uiState.completedModalRatingValue}
        courseIsRated={courseIsRated}
        isRatingSubmitting={progressFlow.isRatingSubmitting}
        onConflictCancel={enrollmentFlow.handleConflictCancel}
        onConflictContinue={enrollmentFlow.handleConflictContinue}
        onCloseConfirmed={() =>
          dispatchUiAction({ type: "CLOSE_CONFIRMED_MODAL" })
        }
        onCloseCompleted={() =>
          dispatchUiAction({ type: "CLOSE_COMPLETED_MODAL" })
        }
        onCompletedRatingChange={(rating) =>
          dispatchUiAction({ type: "SET_COMPLETED_MODAL_RATING", rating })
        }
        onRateCourse={progressFlow.handleRateCourse}
      />
    </div>
  );
};

export default CourseDetailRight;
