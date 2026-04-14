// Fetches instructor filter data for the catalog sidebar preparation.
// Current usage is only for first-step logging before real rendering.
import { useQuery } from "@tanstack/react-query";
import { getInstructors } from "../../endpoints/courses";

const useInstructors = () => {
  return useQuery({
    queryKey: ["instructors"],
    queryFn: getInstructors,
  });
};

export default useInstructors;
