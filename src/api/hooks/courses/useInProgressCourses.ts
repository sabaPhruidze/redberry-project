import { useQuery } from "@tanstack/react-query";
import { getInProgressCourses } from "../../endpoints/courses";
import { inProgressCoursesQueryKey } from "../../queryKeys";

const useInProgressCourses = (enabled = true) => {
  return useQuery({
    queryKey: inProgressCoursesQueryKey,
    queryFn: getInProgressCourses,
    enabled,
  });
};

export default useInProgressCourses;
