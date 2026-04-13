import type { Course } from "./courses";
import type { CourseSchedule } from "./courseDetail";

export interface EnrollmentItem {
  id: number;
  quantity: number;
  totalPrice: number;
  progress: number;
  completedAt: string | null;
  course: Course;
  schedule: CourseSchedule;
}

export interface EnrollmentsResponse {
  data: EnrollmentItem[];
}

export interface EnrollmentsUnauthorizedError {
  message: string;
}

export interface CreateEnrollmentRequest {
  courseId: number;
  courseScheduleId: number;
  force: boolean;
}

export type CreateEnrollmentSuccessData = EnrollmentItem;

export interface CreateEnrollmentResponse {
  data: CreateEnrollmentSuccessData;
  message: string;
}

export interface CreateEnrollmentUnauthorizedError {
  message: "Unauthenticated." | string;
}

export interface CreateEnrollmentConflict {
  requestedCourseId: number;
  conflictingEnrollmentId: number;
  conflictingCourseName: string;
  schedule: string;
}

export interface CreateEnrollmentConflictError {
  message: string;
  conflicts: CreateEnrollmentConflict[];
}

export interface CreateEnrollmentValidationError {
  message: string;
  errors: Record<string, string[]>;
}
