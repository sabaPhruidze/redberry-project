import EnrollmentAccessNotice from "../enrollment/info/EnrollmentAccessNotice";
import TotalPrice from "../enrollment/info/TotalPrice";
import SessionType from "../../schedule/sections/SessionType";
import TimeSlot from "../../schedule/sections/TimeSlot";
import WeeklySchedule from "../../schedule/sections/WeeklySchedule";
import type { CourseDetailRightScheduleSectionProps } from "../../../../../types/courseDetailRightSections";

const CourseDetailRightScheduleSection = ({
  courseBasePrice,
  weeklyOptions,
  timeSlotOptions,
  sessionTypeOptions,
  selectedWeeklyScheduleId,
  selectedTimeSlotId,
  selectedSessionTypeId,
  isWeeklyOpen,
  isTimeSlotOpen,
  isSessionTypeOpen,
  sessionTypeModifier,
  totalPrice,
  isEnrollActionActive,
  isEnrollPending,
  noticeVariant,
  onWeeklySelect,
  onTimeSlotSelect,
  onSessionTypeSelect,
  onToggleWeekly,
  onToggleTimeSlot,
  onToggleSessionType,
  onEnroll,
  onOpenLogin,
  onOpenProfile,
}: CourseDetailRightScheduleSectionProps) => (
  <>
    <WeeklySchedule options={weeklyOptions} selectedId={selectedWeeklyScheduleId} onSelect={onWeeklySelect} isOpen={isWeeklyOpen} onToggle={onToggleWeekly} />
    <TimeSlot options={timeSlotOptions} selectedId={selectedTimeSlotId} onSelect={onTimeSlotSelect} isOpen={isTimeSlotOpen} onToggle={onToggleTimeSlot} />
    <SessionType options={sessionTypeOptions} selectedId={selectedSessionTypeId} onSelect={onSessionTypeSelect} isOpen={isSessionTypeOpen} onToggle={onToggleSessionType} />
    <TotalPrice
      basePrice={courseBasePrice}
      sessionTypeModifier={sessionTypeModifier}
      totalPrice={totalPrice}
      isEnrollButtonActive={isEnrollActionActive}
      isEnrollPending={isEnrollPending}
      onEnroll={onEnroll}
      actionText="Enroll Now"
    />
    {noticeVariant ? (
      <EnrollmentAccessNotice
        variant={noticeVariant}
        onAction={noticeVariant === "auth" ? onOpenLogin : onOpenProfile}
      />
    ) : null}
  </>
);

export default CourseDetailRightScheduleSection;
