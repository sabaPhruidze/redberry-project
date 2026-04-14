// Fetches paginated catalog courses response for cards and pagination UI.
// Loads all catalog pages so filtering can run before client-side pagination.
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../endpoints/courses";

const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const firstPage = await getCourses(1);
      const { lastPage } = firstPage.meta;

      if (lastPage <= 1) {
        return firstPage;
      }

      const remainingPages = await Promise.all(
        Array.from({ length: lastPage - 1 }, (_, index) => getCourses(index + 2)),
      );

      return {
        data: [firstPage.data, ...remainingPages.map((page) => page.data)].flat(),
        meta: firstPage.meta,
      };
    },
  });
};

export default useCourses;
