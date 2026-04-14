import type { Dispatch } from "react";
import type { CourseEnrollment } from "./courseDetail";
import type { CreateEnrollmentRequest } from "./enrollments";

export type NoticeVariant = "auth" | "profile" | null;

export type CourseDetailRightProps = {
  courseId: number;
  courseTitle: string;
  courseBasePrice: number;
  courseEnrollment?: CourseEnrollment;
  courseIsRated?: boolean;
};

export type EnrollmentConflictState = {
  payload: CreateEnrollmentRequest;
  message: string;
  conflictingCourseName?: string;
  conflictingSchedule?: string;
};

export type CourseDetailRightModalState =
  | { type: "none" }
  | { type: "confirmed" }
  | { type: "completed" }
  | { type: "conflict"; data: EnrollmentConflictState };

export type CourseDetailRightUiState = {
  modalState: CourseDetailRightModalState;
  completedModalRatingValue: number | null;
  isRatingCardVisible: boolean;
};

export type CourseDetailRightUiAction =
  | { type: "ENROLLMENT_SUCCESS" }
  | { type: "ENROLLMENT_CONFLICT"; conflict: EnrollmentConflictState }
  | { type: "DISMISS_CONFLICT" }
  | { type: "CLOSE_CONFIRMED_MODAL" }
  | { type: "COMPLETE_COURSE_SUCCESS" }
  | { type: "CLOSE_COMPLETED_MODAL" }
  | { type: "SET_COMPLETED_MODAL_RATING"; rating: number | null }
  | { type: "SYNC_RATING_CARD_VISIBILITY"; visible: boolean }
  | { type: "HIDE_RATING_CARD" };

export type CourseDetailRightUiDispatch = Dispatch<CourseDetailRightUiAction>;
