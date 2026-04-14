import { useQuery } from "@tanstack/react-query";
import { getFeaturedCourses } from "../../endpoints/courses";
//ready to use the data
const useFeaturedCourses = () => {
  return useQuery({
    queryKey: ["featured-courses"],
    queryFn: getFeaturedCourses,
  });
};

export default useFeaturedCourses;
