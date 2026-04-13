import type { WeeklyScheduleOption } from "../../../../../types/courseDetail";
import formatWeeklyScheduleLabel from "./formatWeeklyScheduleLabel";

type WeeklyScheduleTemplate = {
  key: "mon-wed" | "tue-thu" | "wed-fri" | "weekend";
  label: string;
};

const WEEKLY_SCHEDULE_TEMPLATES: WeeklyScheduleTemplate[] = [
  { key: "mon-wed", label: "Mon - Wed" },
  { key: "tue-thu", label: "Tue - Thu" },
  { key: "wed-fri", label: "Wed - Fri" },
  { key: "weekend", label: "Weekend" },
];

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z]/g, "");

const getWeeklyScheduleKey = (option: WeeklyScheduleOption) => {
  const normalizedDays = (option.days ?? []).map(normalize);

  if (normalizedDays.includes("monday") && normalizedDays.includes("wednesday")) return "mon-wed";
  if (normalizedDays.includes("tuesday") && normalizedDays.includes("thursday")) return "tue-thu";
  if (normalizedDays.includes("wednesday") && normalizedDays.includes("friday")) return "wed-fri";
  if (normalizedDays.includes("saturday") || normalizedDays.includes("sunday")) return "weekend";

  const normalizedLabel = normalize(option.label ?? "");
  if (normalizedLabel.includes("monday") && normalizedLabel.includes("wednesday")) return "mon-wed";
  if (normalizedLabel.includes("tuesday") && normalizedLabel.includes("thursday")) return "tue-thu";
  if (normalizedLabel.includes("wednesday") && normalizedLabel.includes("friday")) return "wed-fri";
  if (normalizedLabel.includes("weekend")) return "weekend";

  return null;
};

export const getDisplayWeeklySchedules = (options: WeeklyScheduleOption[]) => {
  return WEEKLY_SCHEDULE_TEMPLATES.map((template, index) => {
    const matchedOption = options.find(
      (option) => getWeeklyScheduleKey(option) === template.key,
    );

    if (!matchedOption) {
      return {
        id: -(index + 1),
        label: template.label,
        days: [],
        isAvailable: false,
        available: false,
      } satisfies WeeklyScheduleOption;
    }

    const isAvailable =
      matchedOption.isAvailable !== false && matchedOption.available !== false;

    return {
      ...matchedOption,
      label:
        template.key === "weekend"
          ? template.label
          : formatWeeklyScheduleLabel(matchedOption.label),
      isAvailable,
      available: isAvailable,
    } satisfies WeeklyScheduleOption;
  });
};


