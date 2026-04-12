// Fetches catalog topics for filter preparation with optional category ids.
// This hook is connected now only to log fetched values and states.
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTopics } from "../endpoints/courses";

const useTopics = (categoryIds?: number[]) => {
  const normalizedCategoryIds = categoryIds?.length
    ? [...categoryIds].sort((a, b) => a - b)
    : undefined;

  return useQuery({
    queryKey: ["topics", normalizedCategoryIds],
    queryFn: () => getTopics(normalizedCategoryIds),
    placeholderData: keepPreviousData,
  });
};

export default useTopics;
