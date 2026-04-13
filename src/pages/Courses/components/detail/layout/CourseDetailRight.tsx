import { useMemo } from "react";
import useCreateEnrollment from "../../../../../api/hooks/useCreateEnrollment";
import useCourseDetailAccordion from "../../../../../hooks/useCourseDetailAccordion";
import useCourseScheduleSelection from "../../../../../hooks/useCourseScheduleSelection";
import useCourseWeeklySchedules from "../../../../../api/hooks/useCourseWeeklySchedules";
import { useAuthModal } from "../../../../../features/auth/hooks/useAuthModal";
import { getAuthUser, getIsProfileCompleteFromUser } from "../../../../../features/profile/helpers/authUser";
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
}

const CourseDetailRight = ({ courseId, courseBasePrice }: CourseDetailRightProps) => {
  const createEnrollmentMutation = useCreateEnrollment();
  const { data: weeklySchedulesResponse } = useCourseWeeklySchedules(courseId);
  const weeklySchedules = useMemo(() => weeklySchedulesResponse?.data ?? [], [weeklySchedulesResponse]);
  const displayWeeklySchedules = useMemo(
    () => getDisplayWeeklySchedules(weeklySchedules),
    [weeklySchedules],
  );

  const selection = useCourseScheduleSelection({ courseId, courseBasePrice, weeklySchedules });
  const displayTimeSlots = useMemo(() => getDisplayTimeSlots(selection.timeSlots), [selection.timeSlots]);
  const displaySessionTypes = useMemo(
    () => getDisplaySessionTypes(selection.sessionTypes),
    [selection.sessionTypes],
  );
  const accordion = useCourseDetailAccordion();
  const { openLoginModal, openProfileModal } = useAuthModal();

  const authUser = getAuthUser();
  const isAuthenticated = typeof window !== "undefined" && Boolean(localStorage.getItem("access_token"));
  const isProfileComplete = getIsProfileCompleteFromUser(authUser);
  const hasCompleteAccess = isAuthenticated && isProfileComplete;
  const selectedCourseScheduleId = selection.selectedSessionType?.courseScheduleId;
  const isEnrollButtonActive =
    hasCompleteAccess &&
    selection.selectedWeeklyScheduleId != null &&
    selection.selectedTimeSlotId != null &&
    selection.selectedSessionTypeId != null &&
    selectedCourseScheduleId != null;
  const noticeVariant = !isAuthenticated ? "auth" : !isProfileComplete ? "profile" : null;

  const handleEnroll = () => {
    if (!isEnrollButtonActive || selectedCourseScheduleId == null) {
      return;
    }

    createEnrollmentMutation.mutate({
      courseId,
      courseScheduleId: selectedCourseScheduleId,
      force: false,
    });
  };

  return (
    <div className="mt-[130px] w-[530px] flex flex-col gap-[32px]">
      <WeeklySchedule options={displayWeeklySchedules} selectedId={selection.selectedWeeklyScheduleId} onSelect={selection.handleWeeklyScheduleChange} isOpen={accordion.isWeeklyScheduleOpen} onToggle={accordion.toggleWeeklySchedule} />
      <TimeSlot options={displayTimeSlots} selectedId={selection.selectedTimeSlotId} onSelect={selection.handleTimeSlotChange} isOpen={accordion.isTimeSlotOpen} onToggle={accordion.toggleTimeSlot} />
      <SessionType options={displaySessionTypes} selectedId={selection.selectedSessionTypeId} onSelect={selection.handleSessionTypeChange} isOpen={accordion.isSessionTypeOpen} onToggle={accordion.toggleSessionType} />
      <TotalPrice
        basePrice={courseBasePrice}
        sessionTypeModifier={selection.sessionTypeModifier}
        totalPrice={selection.totalPrice}
        isEnrollButtonActive={isEnrollButtonActive}
        isEnrollPending={createEnrollmentMutation.isPending}
        onEnroll={handleEnroll}
      />
      {noticeVariant ? (
        <EnrollmentAccessNotice variant={noticeVariant} onAction={noticeVariant === "auth" ? openLoginModal : openProfileModal} />
      ) : null}
    </div>
  );
};

export default CourseDetailRight;


