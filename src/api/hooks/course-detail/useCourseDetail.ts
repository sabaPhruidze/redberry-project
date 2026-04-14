import { useQuery } from "@tanstack/react-query";
import { getCourseDetail } from "../../endpoints/courseDetail";

const useCourseDetail = (courseId?: number) => {
  const hasCourseId = Number.isInteger(courseId);

  return useQuery({
    queryKey: ["course-detail", courseId],
    queryFn: () => getCourseDetail(courseId as number),
    enabled: hasCourseId,
  });
};

export default useCourseDetail;
