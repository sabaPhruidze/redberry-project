import CompletedRatingSection from "../enrollment/progress/CompletedRatingSection";
import CompletedStatusBadge from "../enrollment/status/CompletedStatusBadge";
import EnrolledInfoRows from "../enrollment/info/EnrolledInfoRows";
import EnrolledProgressActions from "../enrollment/progress/EnrolledProgressActions";
import EnrolledStatusBadge from "../enrollment/status/EnrolledStatusBadge";
import type { CourseDetailRightEnrolledSectionProps } from "../../../../../types/courseDetailRightSections";

const CourseDetailRightEnrolledSection = ({
  isCourseCompleted,
  enrollmentProgress,
  weeklyScheduleLabel,
  timeSlotLabel,
  sessionTypeLabel,
  locationLabel,
  courseIsRated,
  isRatingCardVisible,
  isCompletePending,
  isRatingSubmitting,
  onCompleteCourse,
  onRetakeCourse,
  onHideRatingCard,
  onRateCourse,
}: CourseDetailRightEnrolledSectionProps) => (
  <div className="flex w-[473px] flex-col gap-[48px]">
    <div className="flex w-[473px] flex-col gap-[22px]">
      {isCourseCompleted ? <CompletedStatusBadge /> : <EnrolledStatusBadge />}
      <EnrolledInfoRows
        weeklyScheduleLabel={weeklyScheduleLabel}
        timeSlotLabel={timeSlotLabel}
        sessionTypeLabel={sessionTypeLabel}
        locationLabel={locationLabel}
      />
    </div>
    <div className="flex w-[473px] flex-col gap-[22px]">
      <EnrolledProgressActions
        progress={enrollmentProgress}
        isCompleted={isCourseCompleted}
        isActionPending={isCompletePending}
        onCompleteCourse={onCompleteCourse}
        onRetakeCourse={onRetakeCourse}
      />
      {isCourseCompleted && isRatingCardVisible ? (
        <CompletedRatingSection
          onClose={onHideRatingCard}
          isRated={courseIsRated}
          onRate={onRateCourse}
          isSubmitting={isRatingSubmitting}
        />
      ) : null}
    </div>
  </div>
);

export default CourseDetailRightEnrolledSection;
