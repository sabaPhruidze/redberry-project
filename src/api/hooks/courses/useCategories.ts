// Fetches catalog categories for the filter sidebar data flow.
// This is the first integration step and is used for logging only.
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../endpoints/courses";

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};

export default useCategories;
