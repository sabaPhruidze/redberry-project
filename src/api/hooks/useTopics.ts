// Fetches catalog topics for filter preparation with optional category ids.
// This hook is connected now only to log fetched values and states.
import { useQuery } from "@tanstack/react-query";
import { getTopics } from "../endpoints/courses";

const useTopics = (categoryIds?: number[]) => {
  return useQuery({
    queryKey: ["topics", categoryIds],
    queryFn: () => getTopics(categoryIds),
  });
};

export default useTopics;
