import CourseCompletedModal from "../enrollment/modals/CourseCompletedModal";
import EnrollmentConfirmedModal from "../enrollment/modals/EnrollmentConfirmedModal";
import EnrollmentConflictModal from "../enrollment/modals/EnrollmentConflictModal";
import type { CourseDetailRightModalsProps } from "../../../../../types/courseDetailRightSections";

const CourseDetailRightModals = ({
  isConflictOpen,
  isConfirmedOpen,
  isCompletedOpen,
  conflictCourseTitle,
  conflictScheduleLabel,
  enrollmentConfirmedCourseTitle,
  completedCourseTitle,
  completedModalRatingValue,
  courseIsRated,
  isRatingSubmitting,
  onConflictCancel,
  onConflictContinue,
  onCloseConfirmed,
  onCloseCompleted,
  onCompletedRatingChange,
  onRateCourse,
}: CourseDetailRightModalsProps) => (
  <>
    <EnrollmentConflictModal
      isOpen={isConflictOpen}
      onClose={onConflictCancel}
      onContinue={onConflictContinue}
      courseTitle={conflictCourseTitle}
      scheduleLabel={conflictScheduleLabel}
    />
    <EnrollmentConfirmedModal
      isOpen={isConfirmedOpen}
      onClose={onCloseConfirmed}
      courseTitle={enrollmentConfirmedCourseTitle}
    />
    <CourseCompletedModal
      isOpen={isCompletedOpen}
      onClose={onCloseCompleted}
      courseTitle={completedCourseTitle}
      ratingValue={completedModalRatingValue}
      onRatingChange={onCompletedRatingChange}
      onSubmitRating={onRateCourse}
      isSubmittingRating={isRatingSubmitting}
      isRated={courseIsRated}
    />
  </>
);

export default CourseDetailRightModals;
