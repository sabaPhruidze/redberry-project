import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import useCompleteEnrollment from "../../../../../api/hooks/useCompleteEnrollment";
import useCreateEnrollment from "../../../../../api/hooks/useCreateEnrollment";
import useEnrollments from "../../../../../api/hooks/useEnrollments";
import useCourseDetailAccordion from "../../../../../hooks/useCourseDetailAccordion";
import useCourseScheduleSelection from "../../../../../hooks/useCourseScheduleSelection";
import useCourseWeeklySchedules from "../../../../../api/hooks/useCourseWeeklySchedules";
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
import CompletedRatingSection from "../enrollment/CompletedRatingSection";
import CompletedStatusBadge from "../enrollment/CompletedStatusBadge";
import EnrolledInfoRows from "../enrollment/EnrolledInfoRows";
import EnrolledProgressActions from "../enrollment/EnrolledProgressActions";
import EnrollmentConflictModal from "../enrollment/EnrollmentConflictModal";
import EnrolledStatusBadge from "../enrollment/EnrolledStatusBadge";
import EnrollmentAccessNotice from "../enrollment/EnrollmentAccessNotice";
import { getDisplaySessionTypes } from "../../schedule/utils/sessionTypeOptionUtils";
import SessionType from "../../schedule/sections/SessionType";
import TimeSlot from "../../schedule/sections/TimeSlot";
import { getDisplayTimeSlots } from "../../schedule/utils/timeSlotOptionUtils";
import TotalPrice from "../enrollment/TotalPrice";
import WeeklySchedule from "../../schedule/sections/WeeklySchedule";
import { getDisplayWeeklySchedules } from "../../schedule/utils/weeklyScheduleOptionUtils";

interface CourseDetailRightProps {
  courseId: number;
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
  const [isRatingCardVisible, setIsRatingCardVisible] = useState(false);
  const completeEnrollmentMutation = useCompleteEnrollment();
  const createEnrollmentMutation = useCreateEnrollment();
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
      },
      onError: (error) => {
        if (!axios.isAxiosError<CreateEnrollmentConflictError>(error)) {
          return;
        }

        if (error.response?.status !== 409) {
          return;
        }

        const firstConflict = error.response.data?.conflicts?.[0];
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

    completeEnrollmentMutation.mutate(enrollmentId);
  };

  const handleRetakeCourse = () => {
    console.log("Retake flow is not implemented yet.");
  };

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
      {conflictState ? (
        <EnrollmentConflictModal
          message={conflictState.message}
          conflictingCourseName={conflictState.conflictingCourseName}
          conflictingSchedule={conflictState.conflictingSchedule}
          isSubmitting={createEnrollmentMutation.isPending}
          onCancel={handleConflictCancel}
          onContinue={handleConflictContinue}
        />
      ) : null}
    </div>
  );
};

export default CourseDetailRight;
