import type { ReactNode } from "react";

type AuthFormFieldProps = {
  id: string; label: string; placeholder: string; value: string; type?: string;
  autoComplete?: string; error?: string; labelColor?: string; showTopSpacing?: boolean;
  labelInputGapClassName?: string; containerClassName?: string; readOnly?: boolean;
  disabled?: boolean; name?: string; inputRef?: (instance: HTMLInputElement | null) => void;
  onBlur?: () => void; onChange?: (value: string) => void; trailingIcon?: ReactNode;
  trailingIconAriaLabel?: string; onTrailingIconClick?: () => void;
};

const AuthFormField = ({
  id,
  label,
  placeholder,
  type = "text",
  value,
  autoComplete,
  error,
  labelColor = "#000000",
  showTopSpacing = false,
  labelInputGapClassName = "mt-[8px]",
  containerClassName = "",
  readOnly = false,
  disabled = false,
  name,
  inputRef,
  onBlur,
  onChange,
  trailingIcon,
  trailingIconAriaLabel,
  onTrailingIconClick,
}: AuthFormFieldProps) => {
  const hasError = Boolean(error);
  const placeholderClass = hasError ? "placeholder:text-[#F4161A]" : "placeholder:text-[#8A8A8A]";

  return (
    <div className={`${showTopSpacing ? "mt-[24px]" : ""} flex w-full flex-col ${containerClassName}`}>
      <label htmlFor={id} className="h-[17px] w-full text-[14px] leading-[100%]" style={{ fontWeight: 500, color: hasError ? "#F4161A" : labelColor }}>
        {label}
      </label>
      <div className={`${labelInputGapClassName} flex h-[48px] w-full items-center gap-[10px] rounded-[8px] border-[1.5px] bg-white px-[13px] py-[12px] pr-[15px]`} style={{ borderColor: hasError ? "#F4161A" : "#D1D1D1" }}>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          onBlur={onBlur}
          autoComplete={autoComplete}
          readOnly={readOnly}
          disabled={disabled}
          name={name}
          ref={inputRef}
          placeholder={placeholder}
          className={`h-full w-full border-0 bg-transparent p-0 text-[14px] leading-[100%] text-[#141414] outline-none ${placeholderClass}`}
          style={{ fontWeight: 500 }}
        />
        {trailingIcon && onTrailingIconClick && trailingIconAriaLabel ? (
          <button type="button" aria-label={trailingIconAriaLabel} onClick={onTrailingIconClick}>
            {trailingIcon}
          </button>
        ) : trailingIcon ? (
          <span className="flex h-[22px] w-[22px] items-center justify-center">{trailingIcon}</span>
        ) : null}
      </div>
      {hasError ? (
        <p className="mt-[5px] h-[15px] w-full text-[12px] leading-[100%] text-[#F4161A]" style={{ fontWeight: 400 }}>
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default AuthFormField;
