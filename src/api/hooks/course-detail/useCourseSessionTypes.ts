import { useQuery } from "@tanstack/react-query";
import { getCourseSessionTypes } from "../../endpoints/courseDetail";

const useCourseSessionTypes = (
  courseId?: number,
  weeklyScheduleId?: number,
  timeSlotId?: number,
) => {
  const hasCourseId = Number.isInteger(courseId);
  const hasWeeklyScheduleId = Number.isInteger(weeklyScheduleId);
  const hasTimeSlotId = Number.isInteger(timeSlotId);

  return useQuery({
    queryKey: ["course-session-types", courseId, weeklyScheduleId, timeSlotId],
    queryFn: () =>
      getCourseSessionTypes(
        courseId as number,
        weeklyScheduleId as number,
        timeSlotId as number,
      ),
    enabled: hasCourseId && hasWeeklyScheduleId && hasTimeSlotId,
  });
};

export default useCourseSessionTypes;
