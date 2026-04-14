import { useQuery } from "@tanstack/react-query";
import { getEnrollments } from "../../endpoints/enrollments";
import { enrollmentsQueryKey } from "../../queryKeys";

const useEnrollments = (enabled = true) => {
  return useQuery({
    queryKey: enrollmentsQueryKey,
    queryFn: getEnrollments,
    enabled,
  });
};

export default useEnrollments;
