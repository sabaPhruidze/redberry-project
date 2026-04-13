const DAY_SHORT_LABELS: Record<string, string> = {
  monday: "Mon",
  tuesday: "Tue",
  wednesday: "Wed",
  thursday: "Thu",
  friday: "Fri",
  saturday: "Sat",
  sunday: "Sun",
};

const formatDayPart = (value: string) => {
  const trimmedValue = value.trim();
  if (!trimmedValue) {
    return trimmedValue;
  }

  return DAY_SHORT_LABELS[trimmedValue.toLowerCase()] ?? trimmedValue;
};

const formatWeeklyScheduleLabel = (label: string) => {
  const trimmedLabel = label.trim();
  if (!trimmedLabel) {
    return label;
  }

  if (trimmedLabel.toLowerCase() === "weekend") {
    return "Weekend";
  }

  if (!trimmedLabel.includes("-")) {
    return formatDayPart(trimmedLabel);
  }

  return trimmedLabel.split("-").map(formatDayPart).join(" - ");
};

export default formatWeeklyScheduleLabel;
