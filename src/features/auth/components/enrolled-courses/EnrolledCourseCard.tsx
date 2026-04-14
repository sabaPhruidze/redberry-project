// Renders one enrolled course card inside the sidebar using live enrollment data.
import CALENDAR_ICON from "../../../../assets/icons/courses/meta/boxicons_calendar.svg";
import CLOCK_ICON from "../../../../assets/icons/courses/meta/tabler_clock-hour-3.svg";
import LOCATION_ICON from "../../../../assets/icons/courses/meta/location.svg";
import USERS_ICON from "../../../../assets/icons/courses/session-mode/Icon Set=Users.svg";
import HALF_STAR_ICON from "../../../../assets/icons/home/Star (1).svg";
import EMPTY_STAR_ICON from "../../../../assets/icons/home/Star (2).svg";
import STAR_ICON from "../../../../assets/icons/home/Star.svg";
import type { EnrollmentItem } from "../../../../types/enrollments";
import EnrolledCourseProgress from "./EnrolledCourseProgress";
type EnrolledCourseCardProps = {
  item: EnrollmentItem;
  onView: (courseId: number) => void;
};

const getRatingIcon = (avgRating: number) => {
  if (!avgRating) return EMPTY_STAR_ICON;
  if (avgRating <= 4) return HALF_STAR_ICON;
  return STAR_ICON;
};

const EnrolledCourseCard = ({ item, onView }: EnrolledCourseCardProps) => {
  const rawRating = item.course.avgRating;
  const ratingValue = Number(rawRating);
  const progress = Number.isFinite(Number(item.progress))
    ? Number(item.progress)
    : 0;
  const displayRating = rawRating == null ? "0" : String(rawRating);
  const locationLabel =
    item.schedule.location?.trim() ||
    item.schedule.sessionType.location?.trim() ||
    "";
  const infoRows = [
    {
      icon: CALENDAR_ICON,
      alt: "calendar icon",
      label: item.schedule.weeklySchedule.label,
    },
    {
      icon: CLOCK_ICON,
      alt: "clock icon",
      label: item.schedule.timeSlot.label,
    },
    {
      icon: USERS_ICON,
      alt: "session type icon",
      label: item.schedule.sessionType.name,
    },
    ...(locationLabel
      ? [{ icon: LOCATION_ICON, alt: "location icon", label: locationLabel }]
      : []),
  ];

  return (
    <article className="flex h-[295px] w-[623px] flex-col gap-[16px] rounded-[12px] bg-white p-[20px]">
      <div className="flex h-[191px] w-full flex-row gap-[18px]">
        <img
          src={item.course.image}
          alt={item.course.title}
          className="h-[191px] w-[269px] rounded-[10px]"
        />
        <div className="min-w-0 flex-1">
          <div className="flex h-[18px] w-full flex-row justify-between items-center">
            <p className="h-[17px] truncate text-[14px] font-[500] leading-[100%] text-[#8A8A8A]">
              Instructor {item.course.instructor.name}
            </p>
            <div className="flex flex-row items-center gap-[4px]">
              <img
                src={getRatingIcon(ratingValue)}
                alt="star icon"
                className="h-[18px] w-[18px]"
              />
              <p className="text-[14px] font-[500] leading-[100%] text-redberry-text-gray-light">
                {displayRating}
              </p>
            </div>
          </div>
          <h2 className="mt-[8px] h-[48px] w-full text-[20px] font-[600] leading-[24px] text-[#141414]">
            {item.course.title}
          </h2>
          <div className="mt-[8px] flex h-[104px] w-full flex-col">
            {infoRows.map((row) => (
              <div
                key={`${row.alt}-${row.label}`}
                className="flex h-[26px] w-full items-center gap-[8px]"
              >
                <img
                  src={row.icon}
                  alt={row.alt}
                  className="h-[16px] w-[16px]"
                />
                <p className="h-[26px] w-full truncate text-[14px] font-[400] leading-[26px] text-[#666666]">
                  {row.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-[48px] w-full flex-row items-center justify-between gap-[20px]">
        <div className="flex h-[39px] w-[446px] flex-col gap-[8px]">
          <p className="h-[16px] text-[#141414] font-[500] leading-[100%]">
            {Math.round(progress)}% Complete
          </p>
          <EnrolledCourseProgress value={progress} />
        </div>
        <button
          type="button"
          onClick={() => onView(item.course.id)}
          className="h-[48px] w-[117px] rounded-[8px] border-[2px] border-[#958FEF] px-[16px] py-[12px] text-[#4F46E5] font-[500] leading-[24px]"
        >
          View
        </button>
      </div>
    </article>
  );
};

export default EnrolledCourseCard;
