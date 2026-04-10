import type { ComponentType, SVGProps } from "react";
import AuthFormField from "./AuthFormField";

type AuthPasswordInputFieldProps = {
  id: string;
  label: string;
  value: string;
  type?: "password" | "text";
  placeholder: string;
  autoComplete?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  ariaLabel?: string;
  labelColor?: string;
  showTopSpacing?: boolean;
  labelInputGapClassName?: string;
  containerClassName?: string;
  readOnly?: boolean;
  disabled?: boolean;
  error?: string;
  onChange: (value: string) => void;
  onToggleVisibility?: () => void;
};

const AuthPasswordInputField = ({
  id,
  label,
  value,
  type = "text",
  placeholder,
  autoComplete,
  icon: Icon,
  ariaLabel,
  labelColor = "#000000",
  showTopSpacing = false,
  labelInputGapClassName = "mt-[8px]",
  containerClassName = "",
  readOnly = false,
  disabled = false,
  error,
  onChange,
  onToggleVisibility,
}: AuthPasswordInputFieldProps) => {
  const hasError = Boolean(error);
  const iconClassName = hasError
    ? "h-[22px] w-[22px] [&_path]:!fill-[#F4161A] [&_path]:!stroke-[#F4161A]"
    : "h-[22px] w-[22px] text-[#ADADAD]";
  const trailingIcon = Icon ? (
    <Icon
      aria-hidden="true"
      focusable="false"
      className={iconClassName}
    />
  ) : undefined;

  return (
    <AuthFormField
      id={id}
      label={label}
      type={type}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      error={error}
      labelColor={labelColor}
      showTopSpacing={showTopSpacing}
      labelInputGapClassName={labelInputGapClassName}
      containerClassName={containerClassName}
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChange}
      trailingIcon={trailingIcon}
      trailingIconAriaLabel={ariaLabel}
      onTrailingIconClick={onToggleVisibility}
    />
  );
};

export default AuthPasswordInputField;
