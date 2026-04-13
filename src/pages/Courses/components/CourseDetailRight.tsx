import { useMemo } from "react";
import useCourseWeeklySchedules from "../../../api/hooks/useCourseWeeklySchedules";
import { useAuthModal } from "../../../features/auth/hooks/useAuthModal";
import { getAuthUser, getIsProfileCompleteFromUser } from "../../../features/profile/helpers/authUser";
import useCourseDetailAccordion from "../hooks/useCourseDetailAccordion";
import useCourseScheduleSelection from "../hooks/useCourseScheduleSelection";
import EnrollmentAccessNotice from "./EnrollmentAccessNotice";
import { getDisplaySessionTypes } from "./sessionTypeOptionUtils";
import SessionType from "./SessionType";
import TimeSlot from "./TimeSlot";
import { getDisplayTimeSlots } from "./timeSlotOptionUtils";
import TotalPrice from "./TotalPrice";
import WeeklySchedule from "./WeeklySchedule";
import { getDisplayWeeklySchedules } from "./weeklyScheduleOptionUtils";

interface CourseDetailRightProps {
  courseId: number;
  courseBasePrice: number;
}

const CourseDetailRight = ({ courseId, courseBasePrice }: CourseDetailRightProps) => {
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
  const noticeVariant = !isAuthenticated ? "auth" : !isProfileComplete ? "profile" : null;

  return (
    <div className="mt-[130px] w-[530px] flex flex-col gap-[32px]">
      <WeeklySchedule options={displayWeeklySchedules} selectedId={selection.selectedWeeklyScheduleId} onSelect={selection.handleWeeklyScheduleChange} isOpen={accordion.isWeeklyScheduleOpen} onToggle={accordion.toggleWeeklySchedule} />
      <TimeSlot options={displayTimeSlots} selectedId={selection.selectedTimeSlotId} onSelect={selection.handleTimeSlotChange} isOpen={accordion.isTimeSlotOpen} onToggle={accordion.toggleTimeSlot} />
      <SessionType options={displaySessionTypes} selectedId={selection.selectedSessionTypeId} onSelect={selection.handleSessionTypeChange} isOpen={accordion.isSessionTypeOpen} onToggle={accordion.toggleSessionType} />
      <TotalPrice basePrice={courseBasePrice} sessionTypeModifier={selection.sessionTypeModifier} totalPrice={selection.totalPrice} hasCompleteAccess={hasCompleteAccess} />
      {noticeVariant ? (
        <EnrollmentAccessNotice variant={noticeVariant} onAction={noticeVariant === "auth" ? openLoginModal : openProfileModal} />
      ) : null}
    </div>
  );
};

export default CourseDetailRight;
