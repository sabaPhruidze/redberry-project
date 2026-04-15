import type {
  CourseDetailRightUiDispatch,
  CourseDetailRightUiState,
} from "./courseDetailRight";
import type { CourseEnrollment } from "./courseDetail";

export type UseCourseDetailRightScheduleParams = {
  courseId: number;
  courseBasePrice: number;
};

export type UseCourseDetailRightEnrollmentParams = {
  courseId: number;
  courseEnrollment?: CourseEnrollment;
  isAuthenticated: boolean;
};

export type UseCourseDetailRightEnrollmentFlowParams = {
  courseId: number;
  selectedCourseScheduleId: number | null;
  isScheduleSelectionComplete: boolean;
  isAuthenticated: boolean;
  isProfileComplete: boolean;
  openLoginModal: () => void;
  openProfileModal: () => void;
  uiState: CourseDetailRightUiState;
  dispatchUiAction: CourseDetailRightUiDispatch;
};

export type UseCourseDetailRightProgressFlowParams = {
  courseId: number;
  courseIsRated: boolean;
  enrollmentId: number | null;
  isCourseCompleted: boolean;
  resetSelection: () => void;
  dispatchUiAction: CourseDetailRightUiDispatch;
};
