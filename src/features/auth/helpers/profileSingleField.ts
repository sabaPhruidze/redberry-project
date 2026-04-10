import { createElement, type ReactNode, type RefCallback } from "react";
import PENCIL_SIMPLE_ICON from "../../../assets/icons/profile/Icon Set=PencilSimple.svg?react";
import CHECK_ICON from "../../../assets/icons/profile/Icon Set=Check.svg?react";
import ARROW_ICON from "../../../assets/icons/profile/arrow_down.svg?react";

export type TrailingIconType = "pencil" | "check" | "arrow";

export type ProfileSingleFieldProps = {
  id: string;
  label: string;
  name: string;
  type?: "text" | "number" | "email";
  placeholder: string;
  value: string;
  autoComplete?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  inputRef: RefCallback<HTMLInputElement>;
  readOnly?: boolean;
  disabled?: boolean;
  error?: string;
  success?: boolean;
  trailingIconType?: TrailingIconType;
  wrapperClassName?: string;
  labelClassName?: string;
  inputBoxClassName?: string;
  labelInputGapClassName?: string;
  trailingIconContainerClassName?: string;
  fieldBackgroundColor?: string;
  fieldBorderColor?: string;
};

export const getProfileIconClassName = (hasError: boolean) =>
  hasError
    ? "h-[22px] w-[22px] [&_path]:!fill-[#F4161A] [&_path]:!stroke-[#F4161A]"
    : "h-[22px] w-[22px] [&_path]:!fill-[#B9B9B9] [&_path]:!stroke-[#B9B9B9]";

const getArrowIconClassName = (success?: boolean, hasError?: boolean) => {
  if (hasError) {
    return "h-[22px] w-[22px] [&_path]:!fill-[#F4161A] [&_path]:!stroke-[#F4161A]";
  }

  if (success) {
    return "h-[22px] w-[22px] [&_path]:!fill-[#6ACF76] [&_path]:!stroke-[#6ACF76]";
  }

  return "h-[22px] w-[22px] [&_path]:!fill-[#B9B9B9] [&_path]:!stroke-[#B9B9B9]";
};

const getCheckIconClassName = (success?: boolean, hasError?: boolean) => {
  if (hasError) {
    return "h-[22px] w-[22px] [&_path]:!fill-[#F4161A] [&_path]:!stroke-[#F4161A]";
  }

  if (success) {
    return "h-[22px] w-[22px] [&_path]:!fill-[#6ACF76] [&_path]:!stroke-[#6ACF76]";
  }

  return "h-[22px] w-[22px] [&_path]:!fill-[#B9B9B9] [&_path]:!stroke-[#B9B9B9]";
};

export const getTrailingIconNode = (
  trailingIconType?: TrailingIconType,
  success?: boolean,
  hasError?: boolean,
): ReactNode => {
  const className = getProfileIconClassName(Boolean(hasError));

  if (trailingIconType === "pencil") {
    return createElement(PENCIL_SIMPLE_ICON, {
      "aria-hidden": true,
      focusable: "false",
      className,
    });
  }

  if (trailingIconType === "arrow") {
    return createElement(ARROW_ICON, {
      "aria-hidden": true,
      focusable: "false",
      className: getArrowIconClassName(success, hasError),
    });
  }

  if (trailingIconType === "check") {
    return createElement(CHECK_ICON, {
      "aria-hidden": true,
      focusable: "false",
      className: getCheckIconClassName(success, hasError),
    });
  }

  return undefined;
};
