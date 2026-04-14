import CALENDAR_ICON from "../../../../../assets/icons/courses/meta/boxicons_calendar.svg";
import CLOCK_ICON from "../../../../../assets/icons/courses/meta/tabler_clock-hour-3.svg";
import DESKTOP_ICON from "../../../../../assets/icons/courses/session-mode/Icon Set=Desktop.svg";
import LOCATION_ICON from "../../../../../assets/icons/courses/meta/location.svg";

type EnrolledInfoRowsProps = {
  weeklyScheduleLabel: string;
  timeSlotLabel: string;
  sessionTypeLabel: string;
  locationLabel?: string;
};

type EnrolledInfoRowProps = {
  icon: string;
  label: string;
  alt: string;
};

const EnrolledInfoRow = ({ icon, label, alt }: EnrolledInfoRowProps) => {
  return (
    <div className="flex w-fit items-center gap-[12px]">
      <img src={icon} alt={alt} className="h-[24px] w-[24px]" />
      <p className="whitespace-nowrap text-[20px] font-[500] leading-[100%] tracking-[0] text-[#525252]">
        {label}
      </p>
    </div>
  );
};

const formatSessionTypeLabel = (value: string) => {
  const normalized = value.trim().toLowerCase();
  if (normalized === "online") return "Online";
  if (normalized === "hybrid") return "Hybrid";
  if (normalized === "in-person" || normalized === "in person" || normalized === "inperson") {
    return "In-person";
  }
  return value ? `${value[0].toUpperCase()}${value.slice(1)}` : "";
};

const EnrolledInfoRows = ({
  weeklyScheduleLabel,
  timeSlotLabel,
  sessionTypeLabel,
  locationLabel,
}: EnrolledInfoRowsProps) => {
  const normalizedLocation = locationLabel?.trim();

  return (
    <div className="flex w-[473px] flex-col gap-[22px]">
      <EnrolledInfoRow icon={CALENDAR_ICON} alt="calendar icon" label={weeklyScheduleLabel} />
      <EnrolledInfoRow icon={CLOCK_ICON} alt="clock icon" label={timeSlotLabel} />
      <EnrolledInfoRow icon={DESKTOP_ICON} alt="online session icon" label={formatSessionTypeLabel(sessionTypeLabel)} />
      {normalizedLocation ? (
        <EnrolledInfoRow icon={LOCATION_ICON} alt="location icon" label={normalizedLocation} />
      ) : null}
    </div>
  );
};

export default EnrolledInfoRows;
