import type { SessionTypeOption } from "../../../../../types/courseDetail";

type SessionTypeKey = "online" | "in-person" | "hybrid";

type SessionTypeTemplate = {
  key: SessionTypeKey;
  name: string;
  priceModifier: number;
};

const SESSION_TYPE_TEMPLATES: SessionTypeTemplate[] = [
  {
    key: "online",
    name: "Online",
    priceModifier: 0,
  },
  {
    key: "in-person",
    name: "In-Person",
    priceModifier: 30,
  },
  {
    key: "hybrid",
    name: "Hybrid",
    priceModifier: 50,
  },
];

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z]/g, "");

const getSessionTypeKey = (option: SessionTypeOption): SessionTypeKey => {
  const normalizedName = normalize(option.name ?? "");

  if (normalizedName.includes("online")) return "online";
  if (normalizedName.includes("hybrid")) return "hybrid";

  return "in-person";
};

export const getSessionTypeKind = (
  name: string,
): "online" | "hybrid" | "in-person" => {
  const normalizedName = normalize(name);

  if (normalizedName.includes("online")) return "online";
  if (normalizedName.includes("hybrid")) return "hybrid";

  return "in-person";
};

export const getDisplaySessionTypes = (options: SessionTypeOption[]) => {
  return SESSION_TYPE_TEMPLATES.map((template, index) => {
    const matchedOption = options.find(
      (option) => getSessionTypeKey(option) === template.key,
    );

    if (!matchedOption) {
      return {
        id: -(index + 1),
        courseScheduleId: 0,
        name: template.name,
        priceModifier: template.priceModifier,
        availableSeats: 0,
        location: "",
        isAvailable: false,
        available: false,
      } satisfies SessionTypeOption;
    }

    const isAvailable =
      matchedOption.availableSeats > 0 &&
      matchedOption.isAvailable !== false &&
      matchedOption.available !== false;

    return {
      ...matchedOption,
      isAvailable,
      available: isAvailable,
    } satisfies SessionTypeOption;
  });
};

export const formatPriceModifier = (priceModifier: number) => {
  const normalizedModifier = Number(priceModifier);

  if (!Number.isFinite(normalizedModifier) || normalizedModifier === 0) {
    return "Included";
  }

  const amount = Math.abs(normalizedModifier);
  const prefix = normalizedModifier > 0 ? "+" : "-";

  return `${prefix} $${amount}`;
};

export const getSeatsStatusText = (availableSeats: number) => {
  if (availableSeats === 0) {
    return "Fully Booked";
  }
  if (availableSeats < 5) {
    return `Only ${availableSeats} Seats Remaining`;
  }

  return `${availableSeats} Seats Available`;
};


