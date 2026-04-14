import type {
  SessionTypeOption,
  TimeSlotOption,
  WeeklyScheduleOption,
} from "./courseDetail";
import type { NoticeVariant } from "./courseDetailRight";

export type CourseDetailRightEnrolledSectionProps = {
  isCourseCompleted: boolean;
  enrollmentProgress: number;
  weeklyScheduleLabel: string;
  timeSlotLabel: string;
  sessionTypeLabel: string;
  locationLabel?: string;
  courseIsRated: boolean;
  isRatingCardVisible: boolean;
  isCompletePending: boolean;
  isRatingSubmitting: boolean;
  onCompleteCourse: () => void;
  onRetakeCourse: () => void;
  onHideRatingCard: () => void;
  onRateCourse: (rating: number) => Promise<boolean>;
};

export type CourseDetailRightScheduleSectionProps = {
  courseBasePrice: number;
  weeklyOptions: WeeklyScheduleOption[];
  timeSlotOptions: TimeSlotOption[];
  sessionTypeOptions: SessionTypeOption[];
  selectedWeeklyScheduleId: number | null;
  selectedTimeSlotId: number | null;
  selectedSessionTypeId: number | null;
  isWeeklyOpen: boolean;
  isTimeSlotOpen: boolean;
  isSessionTypeOpen: boolean;
  sessionTypeModifier: number;
  totalPrice: number;
  isEnrollActionActive: boolean;
  isEnrollPending: boolean;
  noticeVariant: NoticeVariant;
  onWeeklySelect: (id: number) => void;
  onTimeSlotSelect: (id: number) => void;
  onSessionTypeSelect: (id: number) => void;
  onToggleWeekly: () => void;
  onToggleTimeSlot: () => void;
  onToggleSessionType: () => void;
  onEnroll: () => void;
  onOpenLogin: () => void;
  onOpenProfile: () => void;
};

export type CourseDetailRightModalsProps = {
  isConflictOpen: boolean;
  isConfirmedOpen: boolean;
  isCompletedOpen: boolean;
  conflictCourseTitle: string;
  conflictScheduleLabel: string;
  enrollmentConfirmedCourseTitle: string;
  completedCourseTitle: string;
  completedModalRatingValue: number | null;
  courseIsRated: boolean;
  isRatingSubmitting: boolean;
  onConflictCancel: () => void;
  onConflictContinue: () => void;
  onCloseConfirmed: () => void;
  onCloseCompleted: () => void;
  onCompletedRatingChange: (rating: number | null) => void;
  onRateCourse: (rating: number) => Promise<boolean>;
};
