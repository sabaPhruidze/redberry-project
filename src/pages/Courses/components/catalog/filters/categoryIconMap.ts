import type { ComponentType, SVGProps } from "react";
import BUSINESS_ICON from "../../../../../assets/icons/courses/category/Icon Set=Business.svg?react";
import DATA_SCIENCE_ICON from "../../../../../assets/icons/courses/category/Icon Set=Data Science.svg?react";
import DESIGN_ICON from "../../../../../assets/icons/courses/category/Icon Set=Design.svg?react";
import DEVELOPMENT_ICON from "../../../../../assets/icons/courses/category/Icon Set=Development.svg?react";
import MARKETING_ICON from "../../../../../assets/icons/courses/category/Icon Set=Marketing.svg?react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const getCategoryIconComponent = (icon: string): IconComponent | null => {
  const normalizedIcon = icon.trim().toLowerCase().replaceAll("_", "-").replaceAll(" ", "-");

  switch (normalizedIcon) {
    case "development":
      return DEVELOPMENT_ICON;
    case "design":
      return DESIGN_ICON;
    case "business":
      return BUSINESS_ICON;
    case "marketing":
      return MARKETING_ICON;
    case "data-science":
      return DATA_SCIENCE_ICON;
    default:
      return null;
  }
};


