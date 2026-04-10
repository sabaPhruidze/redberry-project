import type { ComponentType, SVGProps } from "react";

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
  error,
  onChange,
  onToggleVisibility,
}: AuthPasswordInputFieldProps) => {
  const hasError = Boolean(error);
  const iconColorClass = hasError ? "text-[#F4161A]" : "text-[#ADADAD]";
  const placeholderClass = hasError
    ? "placeholder:text-[#F4161A]"
    : "placeholder:text-[#8A8A8A]";

  return (
    <div
      className={`${showTopSpacing ? "mt-[24px]" : ""} flex w-full flex-col ${containerClassName}`}
    >
      <label
        htmlFor={id}
        className="h-[17px] w-full text-[14px] leading-[100%]"
        style={{ fontWeight: 500, color: hasError ? "#F4161A" : labelColor }}
      >
        {label}
      </label>
      <div
        className={`${labelInputGapClassName} flex h-[48px] w-full items-center gap-[10px] rounded-[8px] border-[1.5px] bg-white px-[13px] py-[12px] pr-[15px]`}
        style={{ borderColor: hasError ? "#F4161A" : "#D1D1D1" }}
      >
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={`h-full w-full border-0 bg-transparent p-0 text-[14px] leading-[100%] text-[#141414] outline-none ${placeholderClass}`}
          style={{ fontWeight: 500 }}
        />
        {Icon && onToggleVisibility && ariaLabel ? (
          <button type="button" aria-label={ariaLabel} onClick={onToggleVisibility}>
            <Icon aria-hidden="true" focusable="false" className={`h-[22px] w-[22px] ${iconColorClass}`} />
          </button>
        ) : null}
      </div>
      {hasError && (
        <p
          className="mt-[5px] h-[15px] w-full text-[12px] leading-[100%] text-[#F4161A]"
          style={{ fontWeight: 400 }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default AuthPasswordInputField;
