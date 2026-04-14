import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourseReview } from "../../endpoints/courseDetail";
import {
  enrollmentsQueryKey,
  inProgressCoursesQueryKey,
} from "../../queryKeys";

type CreateCourseReviewInput = {
  courseId: number;
  rating: number;
};

const useCreateCourseReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ courseId, rating }: CreateCourseReviewInput) =>
      createCourseReview(courseId, { rating }),
    onSuccess: async (_, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ["course-detail", variables.courseId],
      });
      await queryClient.invalidateQueries({
        queryKey: ["course-detail"],
      });
      await queryClient.invalidateQueries({
        queryKey: enrollmentsQueryKey,
      });
      await queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
      await queryClient.invalidateQueries({
        queryKey: ["featured-courses"],
      });
      await queryClient.invalidateQueries({
        queryKey: inProgressCoursesQueryKey,
      });
    },
  });
};

export default useCreateCourseReview;
