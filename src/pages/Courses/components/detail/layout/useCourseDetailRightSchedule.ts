import { useMemo } from "react";
import useCourseWeeklySchedules from "../../../../../api/hooks/course-detail/useCourseWeeklySchedules";
import useCourseDetailAccordion from "../../../../../hooks/useCourseDetailAccordion";
import useCourseScheduleSelection from "../../../../../hooks/useCourseScheduleSelection";
import { getDisplaySessionTypes } from "../../schedule/utils/sessionTypeOptionUtils";
import { getDisplayTimeSlots } from "../../schedule/utils/timeSlotOptionUtils";
import { getDisplayWeeklySchedules } from "../../schedule/utils/weeklyScheduleOptionUtils";
import type { UseCourseDetailRightScheduleParams } from "../../../../../types/courseDetailRightHooks";

export const useCourseDetailRightSchedule = ({
  courseId,
  courseBasePrice,
}: UseCourseDetailRightScheduleParams) => {
  const { data: weeklySchedulesResponse } = useCourseWeeklySchedules(courseId);
  const weeklySchedules = useMemo(
    () => weeklySchedulesResponse?.data ?? [],
    [weeklySchedulesResponse],
  );
  const selection = useCourseScheduleSelection({
    courseId,
    courseBasePrice,
    weeklySchedules,
  });
  const displayWeeklySchedules = useMemo(
    () => getDisplayWeeklySchedules(weeklySchedules),
    [weeklySchedules],
  );
  const displayTimeSlots = useMemo(
    () => getDisplayTimeSlots(selection.timeSlots),
    [selection.timeSlots],
  );
  const displaySessionTypes = useMemo(
    () => getDisplaySessionTypes(selection.sessionTypes),
    [selection.sessionTypes],
  );

  return {
    accordion: useCourseDetailAccordion(),
    selection,
    displayWeeklySchedules,
    displayTimeSlots,
    displaySessionTypes,
  };
};
