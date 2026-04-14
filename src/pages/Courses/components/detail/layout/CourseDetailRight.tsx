import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import useCompleteEnrollment from "../../../../../api/hooks/enrollments/useCompleteEnrollment";
import useCreateEnrollment from "../../../../../api/hooks/enrollments/useCreateEnrollment";
import useCreateCourseReview from "../../../../../api/hooks/course-detail/useCreateCourseReview";
import useDeleteEnrollment from "../../../../../api/hooks/enrollments/useDeleteEnrollment";
import useEnrollments from "../../../../../api/hooks/enrollments/useEnrollments";
import useCourseDetailAccordion from "../../../../../hooks/useCourseDetailAccordion";
import useCourseScheduleSelection from "../../../../../hooks/useCourseScheduleSelection";
import useCourseWeeklySchedules from "../../../../../api/hooks/course-detail/useCourseWeeklySchedules";
import { useAuthModal } from "../../../../../features/auth/hooks/useAuthModal";
import {
  getAuthUser,
  getIsProfileCompleteFromUser,
} from "../../../../../features/profile/helpers/authUser";
import type { CourseEnrollment } from "../../../../../types/courseDetail";
import type {
  CreateEnrollmentConflictError,
  CreateEnrollmentRequest,
} from "../../../../../types/enrollments";
import CourseCompletedModal from "../enrollment/modals/CourseCompletedModal";
import CompletedRatingSection from "../enrollment/progress/CompletedRatingSection";
import CompletedStatusBadge from "../enrollment/status/CompletedStatusBadge";
import EnrolledInfoRows from "../enrollment/info/EnrolledInfoRows";
import EnrolledProgressActions from "../enrollment/progress/EnrolledProgressActions";
import EnrollmentConfirmedModal from "../enrollment/modals/EnrollmentConfirmedModal";
import EnrollmentConflictModal from "../enrollment/modals/EnrollmentConflictModal";
import EnrolledStatusBadge from "../enrollment/status/EnrolledStatusBadge";
import EnrollmentAccessNotice from "../enrollment/info/EnrollmentAccessNotice";
import { getDisplaySessionTypes } from "../../schedule/utils/sessionTypeOptionUtils";
import SessionType from "../../schedule/sections/SessionType";
import TimeSlot from "../../schedule/sections/TimeSlot";
import { getDisplayTimeSlots } from "../../schedule/utils/timeSlotOptionUtils";
import TotalPrice from "../enrollment/info/TotalPrice";
import WeeklySchedule from "../../schedule/sections/WeeklySchedule";
import { getDisplayWeeklySchedules } from "../../schedule/utils/weeklyScheduleOptionUtils";

interface CourseDetailRightProps {
  courseId: number;
  courseTitle: string;
  courseBasePrice: number;
  courseEnrollment?: CourseEnrollment;
  courseIsRated?: boolean;
}

type EnrollmentConflictState = {
  payload: CreateEnrollmentRequest;
  message: string;
  conflictingCourseName?: string;
  conflictingSchedule?: string;
};

const CourseDetailRight = ({
  courseId,
  courseTitle,
  courseBasePrice,
  courseEnrollment,
  courseIsRated = false,
}: CourseDetailRightProps) => {
  const authUser = getAuthUser();
  const isAuthenticated =
    typeof window !== "undefined" &&
    Boolean(localStorage.getItem("access_token"));
  const isProfileComplete = getIsProfileCompleteFromUser(authUser);
  const hasCompleteAccess = isAuthenticated && isProfileComplete;
  const [conflictState, setConflictState] =
    useState<EnrollmentConflictState | null>(null);
  const [isEnrollmentConfirmedOpen, setIsEnrollmentConfirmedOpen] =
    useState(false);
  const [isCourseCompletedModalOpen, setIsCourseCompletedModalOpen] =
    useState(false);
  const [completedModalRatingValue, setCompletedModalRatingValue] =
    useState<number | null>(null);
  const [isRatingCardVisible, setIsRatingCardVisible] = useState(false);
  const completeEnrollmentMutation = useCompleteEnrollment();
  const createCourseReviewMutation = useCreateCourseReview();
  const createEnrollmentMutation = useCreateEnrollment();
  const deleteEnrollmentMutation = useDeleteEnrollment();
  const { data: enrollmentsData } = useEnrollments(isAuthenticated);
  const { data: weeklySchedulesResponse } = useCourseWeeklySchedules(courseId);
  const weeklySchedules = useMemo(
    () => weeklySchedulesResponse?.data ?? [],
    [weeklySchedulesResponse],
  );
  const displayWeeklySchedules = useMemo(
    () => getDisplayWeeklySchedules(weeklySchedules),
    [weeklySchedules],
  );

  const selection = useCourseScheduleSelection({
    courseId,
    courseBasePrice,
    weeklySchedules,
  });
  const displayTimeSlots = useMemo(
    () => getDisplayTimeSlots(selection.timeSlots),
    [selection.timeSlots],
  );
  const displaySessionTypes = useMemo(
    () => getDisplaySessionTypes(selection.sessionTypes),
    [selection.sessionTypes],
  );
  const accordion = useCourseDetailAccordion();
  const { openLoginModal, openProfileModal } = useAuthModal();

  const matchedEnrollment = useMemo(
    () =>
      enrollmentsData?.find((item) => item.course.id === courseId) ??
      courseEnrollment,
    [courseEnrollment, enrollmentsData, courseId],
  );
  const enrollmentId = matchedEnrollment?.id ?? null;
  const numericProgress = Number(matchedEnrollment?.progress);
  const enrollmentProgress = Number.isFinite(numericProgress)
    ? Math.min(100, Math.max(0, numericProgress))
    : 0;
  const isCourseCompleted = enrollmentProgress >= 100;
  const isEnrolled = enrollmentId != null;
  const selectedCourseScheduleId =
    selection.selectedSessionType?.courseScheduleId;
  const isEnrollActionActive =
    !isEnrolled &&
    hasCompleteAccess &&
    selection.selectedWeeklyScheduleId != null &&
    selection.selectedTimeSlotId != null &&
    selection.selectedSessionTypeId != null &&
    selectedCourseScheduleId != null;
  const noticeVariant = !isAuthenticated
    ? "auth"
    : !isProfileComplete
      ? "profile"
      : null;

  const submitEnrollment = (payload: CreateEnrollmentRequest) => {
    createEnrollmentMutation.mutate(payload, {
      onSuccess: () => {
        setConflictState(null);
        setIsCourseCompletedModalOpen(false);
        setIsEnrollmentConfirmedOpen(true);
      },
      onError: (error) => {
        if (!axios.isAxiosError<CreateEnrollmentConflictError>(error)) {
          return;
        }

        if (error.response?.status !== 409) {
          return;
        }

        const firstConflict = error.response.data?.conflicts?.[0];
        setIsEnrollmentConfirmedOpen(false);
        setIsCourseCompletedModalOpen(false);
        setConflictState({
          payload,
          message: error.response.data?.message ?? "Schedule conflict detected",
          conflictingCourseName: firstConflict?.conflictingCourseName,
          conflictingSchedule: firstConflict?.schedule,
        });
      },
    });
  };

  const handleEnroll = () => {
    if (!isEnrollActionActive || selectedCourseScheduleId == null) {
      return;
    }

    submitEnrollment({
      courseId,
      courseScheduleId: selectedCourseScheduleId,
      force: false,
    });
  };

  const handleConflictCancel = () => {
    setConflictState(null);
  };

  const handleConflictContinue = () => {
    if (!conflictState) {
      return;
    }

    submitEnrollment({ ...conflictState.payload, force: true });
  };
  const conflictModalHandlers = {
    // Keep these handlers tied to the existing 409 conflict flow.
    onCancel: handleConflictCancel,
    onContinue: handleConflictContinue,
  };

  const enrolledSchedule = matchedEnrollment?.schedule;
  const enrolledLocation =
    enrolledSchedule?.location?.trim() ||
    enrolledSchedule?.sessionType.location?.trim() ||
    undefined;

  useEffect(() => {
    if (isCourseCompleted) {
      setIsRatingCardVisible(true);
      return;
    }

    setIsRatingCardVisible(false);
  }, [courseId, isCourseCompleted, courseIsRated]);

  const handleCompleteCourse = () => {
    if (
      enrollmentId == null ||
      isCourseCompleted ||
      completeEnrollmentMutation.isPending
    ) {
      return;
    }

    completeEnrollmentMutation.mutate(enrollmentId, {
      onSuccess: () => {
        setConflictState(null);
        setIsEnrollmentConfirmedOpen(false);
        setCompletedModalRatingValue(null);
        setIsCourseCompletedModalOpen(true);
      },
    });
  };

  const handleRetakeCourse = () => {
    if (enrollmentId == null || deleteEnrollmentMutation.isPending) {
      return;
    }

    setIsRatingCardVisible(false);
    deleteEnrollmentMutation.mutate(enrollmentId, {
      onSuccess: () => {
        selection.resetSelection();
      },
    });
  };

  const handleRateCourse = async (rating: number) => {
    if (createCourseReviewMutation.isPending) {
      return false;
    }

    try {
      await createCourseReviewMutation.mutateAsync({
        courseId,
        rating,
      });
      return true;
    } catch {
      return false;
    }
  };
  const isConflictModalOpen = conflictState != null;
  const selectedWeeklyScheduleLabel =
    displayWeeklySchedules
      .find((item) => item.id === selection.selectedWeeklyScheduleId)
      ?.label?.trim() ?? "";
  const selectedTimeSlotLabel =
    displayTimeSlots
      .find((item) => item.id === selection.selectedTimeSlotId)
      ?.label?.trim() ?? "";
  const derivedScheduleLabel =
    selectedWeeklyScheduleLabel && selectedTimeSlotLabel
      ? `${selectedWeeklyScheduleLabel} at ${selectedTimeSlotLabel}`
      : selectedWeeklyScheduleLabel || selectedTimeSlotLabel;
  const conflictCourseTitle =
    conflictState?.conflictingCourseName?.trim() || "another course";
  const conflictScheduleLabel =
    conflictState?.conflictingSchedule?.trim() ||
    derivedScheduleLabel ||
    "selected schedule";
  const isEnrollmentConfirmedModalOpen =
    isEnrollmentConfirmedOpen &&
    !isConflictModalOpen &&
    !isCourseCompletedModalOpen;
  const isCourseCompletedFeedbackModalOpen =
    isCourseCompletedModalOpen && !isConflictModalOpen;
  const enrollmentConfirmedCourseTitle = courseTitle.trim() || "Course";
  const completedCourseTitle = courseTitle.trim() || "Course";

  return (
    <div className="mt-[130px] w-[530px] flex flex-col gap-[32px]">
      {isEnrolled ? (
        <div className="flex w-[473px] flex-col gap-[48px]">
          <div className="flex w-[473px] flex-col gap-[22px]">
            {isCourseCompleted ? <CompletedStatusBadge /> : <EnrolledStatusBadge />}
            <EnrolledInfoRows
              weeklyScheduleLabel={enrolledSchedule?.weeklySchedule.label ?? ""}
              timeSlotLabel={enrolledSchedule?.timeSlot.label ?? ""}
              sessionTypeLabel={enrolledSchedule?.sessionType.name ?? ""}
              locationLabel={enrolledLocation}
            />
          </div>
          <div className="flex w-[473px] flex-col gap-[22px]">
            <EnrolledProgressActions
              progress={enrollmentProgress}
              isCompleted={isCourseCompleted}
              isActionPending={completeEnrollmentMutation.isPending}
              onCompleteCourse={handleCompleteCourse}
              onRetakeCourse={handleRetakeCourse}
            />
            {isCourseCompleted && isRatingCardVisible ? (
              <CompletedRatingSection
                onClose={() => setIsRatingCardVisible(false)}
                isRated={courseIsRated}
                onRate={handleRateCourse}
                isSubmitting={createCourseReviewMutation.isPending}
              />
            ) : null}
          </div>
        </div>
      ) : (
        <>
          <WeeklySchedule
            options={displayWeeklySchedules}
            selectedId={selection.selectedWeeklyScheduleId}
            onSelect={selection.handleWeeklyScheduleChange}
            isOpen={accordion.isWeeklyScheduleOpen}
            onToggle={accordion.toggleWeeklySchedule}
          />
          <TimeSlot
            options={displayTimeSlots}
            selectedId={selection.selectedTimeSlotId}
            onSelect={selection.handleTimeSlotChange}
            isOpen={accordion.isTimeSlotOpen}
            onToggle={accordion.toggleTimeSlot}
          />
          <SessionType
            options={displaySessionTypes}
            selectedId={selection.selectedSessionTypeId}
            onSelect={selection.handleSessionTypeChange}
            isOpen={accordion.isSessionTypeOpen}
            onToggle={accordion.toggleSessionType}
          />
          <TotalPrice
            basePrice={courseBasePrice}
            sessionTypeModifier={selection.sessionTypeModifier}
            totalPrice={selection.totalPrice}
            isEnrollButtonActive={isEnrollActionActive}
            isEnrollPending={createEnrollmentMutation.isPending}
            onEnroll={handleEnroll}
            actionText="Enroll Now"
          />
          {noticeVariant ? (
            <EnrollmentAccessNotice
              variant={noticeVariant}
              onAction={
                noticeVariant === "auth" ? openLoginModal : openProfileModal
              }
            />
          ) : null}
        </>
      )}
      <EnrollmentConflictModal
        isOpen={isConflictModalOpen}
        onClose={conflictModalHandlers.onCancel}
        onContinue={conflictModalHandlers.onContinue}
        courseTitle={conflictCourseTitle}
        scheduleLabel={conflictScheduleLabel}
      />
      <EnrollmentConfirmedModal
        isOpen={isEnrollmentConfirmedModalOpen}
        onClose={() => setIsEnrollmentConfirmedOpen(false)}
        courseTitle={enrollmentConfirmedCourseTitle}
      />
      <CourseCompletedModal
        isOpen={isCourseCompletedFeedbackModalOpen}
        onClose={() => setIsCourseCompletedModalOpen(false)}
        courseTitle={completedCourseTitle}
        ratingValue={completedModalRatingValue}
        onRatingChange={setCompletedModalRatingValue}
        onSubmitRating={handleRateCourse}
        isSubmittingRating={createCourseReviewMutation.isPending}
        isRated={courseIsRated}
      />
    </div>
  );
};

export default CourseDetailRight;
