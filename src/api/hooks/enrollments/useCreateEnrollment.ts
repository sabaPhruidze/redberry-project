import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { createEnrollment } from "../../endpoints/enrollments";
import { enrollmentsQueryKey } from "../../queryKeys";
import type {
  CreateEnrollmentConflictError,
  CreateEnrollmentRequest,
  CreateEnrollmentUnauthorizedError,
  CreateEnrollmentValidationError,
} from "../../../types/enrollments";

const useCreateEnrollment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateEnrollmentRequest) => createEnrollment(payload),
    onSuccess: async () => {
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
          | CreateEnrollmentConflictError
          | CreateEnrollmentValidationError
          | CreateEnrollmentUnauthorizedError
        >(error)
      ) {
        return;
      }

      if (error.response?.status === 409) {
        console.log("POST /enrollments conflict:", error.response.data);
      }

      if (error.response?.status === 422) {
        console.log("POST /enrollments validation error:", error.response.data);
      }
    },
  });
};

export default useCreateEnrollment;
