import MOCK_COURSE_IN_PROGRESS from "../../../assets/images/home/mock_course_in_progress.png";
import type { ContinueLearningCourse } from "./ContinueLearningCard";

export const CONTINUE_LEARNING_DATA: ContinueLearningCourse[] = [
  {
    id: 0,
    progress: 65,
    course: {
      id: 0,
      title: "Advanced React & TypeScript Development ",
      image: MOCK_COURSE_IN_PROGRESS,
      avgRating: 4.9,
      instructor: { name: "Lecturer Marilyn Mango" },
    },
  },
  {
    id: 1,
    progress: 65,
    course: {
      id: 0,
      title: "Advanced React & TypeScript Development ",
      image: MOCK_COURSE_IN_PROGRESS,
      avgRating: 4.9,
      instructor: { name: "Lecturer Marilyn Mango" },
    },
  },
  {
    id: 2,
    progress: 65,
    course: {
      id: 0,
      title: "Advanced React & TypeScript Development ",
      image: MOCK_COURSE_IN_PROGRESS,
      avgRating: 4.9,
      instructor: { name: "Lecturer Marilyn Mango" },
    },
  },
];
