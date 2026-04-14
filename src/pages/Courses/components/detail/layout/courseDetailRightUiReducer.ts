import type {
  CourseDetailRightUiAction,
  CourseDetailRightUiState,
} from "../../../../../types/courseDetailRight";

export const initialCourseDetailRightUiState: CourseDetailRightUiState = {
  modalState: { type: "none" },
  completedModalRatingValue: null,
  isRatingCardVisible: false,
};

export const courseDetailRightUiReducer = (
  state: CourseDetailRightUiState,
  action: CourseDetailRightUiAction,
): CourseDetailRightUiState => {
  if (action.type === "ENROLLMENT_SUCCESS") {
    return state.modalState.type === "confirmed"
      ? state
      : { ...state, modalState: { type: "confirmed" } };
  }
  if (action.type === "ENROLLMENT_CONFLICT") {
    return { ...state, modalState: { type: "conflict", data: action.conflict } };
  }
  if (action.type === "DISMISS_CONFLICT") {
    return state.modalState.type === "conflict"
      ? { ...state, modalState: { type: "none" } }
      : state;
  }
  if (action.type === "CLOSE_CONFIRMED_MODAL") {
    return state.modalState.type === "confirmed"
      ? { ...state, modalState: { type: "none" } }
      : state;
  }
  if (action.type === "COMPLETE_COURSE_SUCCESS") {
    return {
      ...state,
      modalState: { type: "completed" },
      completedModalRatingValue: null,
    };
  }
  if (action.type === "CLOSE_COMPLETED_MODAL") {
    return state.modalState.type === "completed"
      ? { ...state, modalState: { type: "none" } }
      : state;
  }
  if (action.type === "SET_COMPLETED_MODAL_RATING") {
    return state.completedModalRatingValue === action.rating
      ? state
      : { ...state, completedModalRatingValue: action.rating };
  }
  if (action.type === "SYNC_RATING_CARD_VISIBILITY") {
    return state.isRatingCardVisible === action.visible
      ? state
      : { ...state, isRatingCardVisible: action.visible };
  }
  return state.isRatingCardVisible ? { ...state, isRatingCardVisible: false } : state;
};
