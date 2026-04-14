import { useReducer } from "react";
import {
  courseDetailRightUiReducer,
  initialCourseDetailRightUiState,
} from "./courseDetailRightUiReducer";

export const useCourseDetailRightUi = () =>
  useReducer(courseDetailRightUiReducer, initialCourseDetailRightUiState);
