import { useQuery } from "@tanstack/react-query";
import { getCourseTimeSlots } from "../../endpoints/courseDetail";

const useCourseTimeSlots = (courseId?: number, weeklyScheduleId?: number) => {
  const hasCourseId = Number.isInteger(courseId);
  const hasWeeklyScheduleId = Number.isInteger(weeklyScheduleId);

  return useQuery({
    queryKey: ["course-time-slots", courseId, weeklyScheduleId],
    queryFn: () => getCourseTimeSlots(courseId as number, weeklyScheduleId as number),
    enabled: hasCourseId && hasWeeklyScheduleId,
  });
};

export default useCourseTimeSlots;
