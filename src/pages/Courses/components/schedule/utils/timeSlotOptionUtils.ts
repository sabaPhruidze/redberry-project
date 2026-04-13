import type { TimeSlotOption } from "../../../../../types/courseDetail";

type TimeSlotKey = "morning" | "afternoon" | "evening";

type TimeSlotTemplate = {
  key: TimeSlotKey;
  label: string;
  startTime: string;
  endTime: string;
};

const TIME_SLOT_TEMPLATES: TimeSlotTemplate[] = [
  {
    key: "morning",
    label: "Morning",
    startTime: "09:00",
    endTime: "12:00",
  },
  {
    key: "afternoon",
    label: "Afternoon",
    startTime: "12:00",
    endTime: "18:00",
  },
  {
    key: "evening",
    label: "Evening",
    startTime: "18:00",
    endTime: "21:00",
  },
];

const normalize = (value: string) => value.toLowerCase();

const formatClockTime = (value: string) => {
  const [hourPart, minutePart = "00"] = value.split(":");
  const hour = Number(hourPart);

  if (Number.isNaN(hour)) {
    return value;
  }

  const normalizedHour = ((hour + 11) % 12) + 1;
  const period = hour >= 12 ? "PM" : "AM";

  return `${normalizedHour}:${minutePart} ${period}`;
};

export const getTimeSlotPeriod = (option: TimeSlotOption): TimeSlotKey => {
  const label = normalize(option.label ?? "");

  if (label.includes("morning")) return "morning";
  if (label.includes("afternoon")) return "afternoon";
  if (label.includes("evening") || label.includes("night")) return "evening";

  const parsedHour = Number((option.startTime ?? "").split(":")[0]);

  if (Number.isNaN(parsedHour) || parsedHour < 12) return "morning";
  if (parsedHour < 18) return "afternoon";

  return "evening";
};

export const getDisplayTimeSlots = (options: TimeSlotOption[]) => {
  return TIME_SLOT_TEMPLATES.map((template, index) => {
    const matchedOption = options.find(
      (option) => getTimeSlotPeriod(option) === template.key,
    );

    if (!matchedOption) {
      return {
        id: -(index + 1),
        label: template.label,
        startTime: template.startTime,
        endTime: template.endTime,
        isAvailable: false,
        available: false,
      } satisfies TimeSlotOption;
    }

    const isAvailable =
      matchedOption.isAvailable !== false &&
      matchedOption.available !== false;

    return {
      ...matchedOption,
      isAvailable,
      available: isAvailable,
    } satisfies TimeSlotOption;
  });
};

export const getTimeSlotDisplayTitle = (option: TimeSlotOption) => {
  const label = option.label?.trim() ?? "";

  if (!label) {
    return `${formatClockTime(option.startTime)} - ${formatClockTime(option.endTime)}`;
  }

  const title = label.split("(")[0]?.trim();
  return title || label;
};

export const getTimeSlotDisplayRange = (option: TimeSlotOption) => {
  const start = option.startTime?.trim() ?? "";
  const end = option.endTime?.trim() ?? "";

  if (!start || !end) {
    return option.label?.trim() ?? "";
  }

  return `${formatClockTime(start)} - ${formatClockTime(end)}`;
};


