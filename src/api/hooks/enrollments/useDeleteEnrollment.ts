import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { deleteEnrollment } from "../../endpoints/enrollments";
import { enrollmentsQueryKey } from "../../queryKeys";
import type {
  DeleteEnrollmentForbiddenError,
  DeleteEnrollmentNotFoundError,
  DeleteEnrollmentUnauthorizedError,
} from "../../../types/enrollments";

const useDeleteEnrollment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (enrollmentId: number) => deleteEnrollment(enrollmentId),
    onSuccess: async (_, enrollmentId) => {
      console.log("DELETE /enrollments/{id} success:", enrollmentId);
      await queryClient.invalidateQueries({
        queryKey: enrollmentsQueryKey,
      });
      await queryClient.invalidateQueries({
        queryKey: ["course-detail"],
      });
    },
    onError: (error) => {
      if (
        !axios.isAxiosError<
          | DeleteEnrollmentUnauthorizedError
          | DeleteEnrollmentForbiddenError
          | DeleteEnrollmentNotFoundError
        >(error)
      ) {
        return;
      }

      if ([401, 403, 404].includes(error.response?.status ?? 0)) {
        console.log("DELETE /enrollments/{id} error:", error.response?.data);
      }
    },
  });
};

export default useDeleteEnrollment;
