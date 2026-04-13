import { useState } from "react";

const useCourseDetailAccordion = () => {
  const [isWeeklyScheduleOpen, setIsWeeklyScheduleOpen] = useState(true);
  const [isTimeSlotOpen, setIsTimeSlotOpen] = useState(true);
  const [isSessionTypeOpen, setIsSessionTypeOpen] = useState(true);

  const toggleWeeklySchedule = () => {
    setIsWeeklyScheduleOpen((previous) => !previous);
  };

  const toggleTimeSlot = () => {
    setIsTimeSlotOpen((previous) => !previous);
  };

  const toggleSessionType = () => {
    setIsSessionTypeOpen((previous) => !previous);
  };

  return {
    isWeeklyScheduleOpen,
    isTimeSlotOpen,
    isSessionTypeOpen,
    toggleWeeklySchedule,
    toggleTimeSlot,
    toggleSessionType,
  };
};

export default useCourseDetailAccordion;
