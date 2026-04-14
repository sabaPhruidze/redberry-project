import { useQuery } from "@tanstack/react-query";
import { getCourseWeeklySchedules } from "../../endpoints/courseDetail";

const useCourseWeeklySchedules = (courseId?: number) => {
  const hasCourseId = Number.isInteger(courseId);

  return useQuery({
    queryKey: ["course-weekly-schedules", courseId],
    queryFn: () => getCourseWeeklySchedules(courseId as number),
    enabled: hasCourseId,
  });
};

export default useCourseWeeklySchedules;
