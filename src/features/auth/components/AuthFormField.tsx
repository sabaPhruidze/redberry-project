import type { ReactNode } from "react";
import AuthFieldLabel from "./AuthFieldLabel";
type AuthFormFieldProps = {
  id: string; label: string; placeholder: string; value: string; type?: string;
  autoComplete?: string; error?: string; labelColor?: string; showTopSpacing?: boolean;
  labelInputGapClassName?: string; containerClassName?: string; readOnly?: boolean;
  disabled?: boolean; name?: string; inputRef?: (instance: HTMLInputElement | null) => void;
  onBlur?: () => void; onChange?: (value: string) => void; trailingIcon?: ReactNode;
  trailingIconAriaLabel?: string; onTrailingIconClick?: () => void; labelClassName?: string;
  inputBoxClassName?: string; placeholderClassName?: string; fieldBorderColor?: string;
  fieldBackgroundColor?: string; trailingIconContainerClassName?: string;
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
  labelClassName = "w-full",
  inputBoxClassName = "",
  placeholderClassName = "placeholder:text-[#8A8A8A]",
  fieldBorderColor = "#D1D1D1",
  fieldBackgroundColor = "#FFFFFF",
  trailingIconContainerClassName = "flex h-[22px] w-[22px] items-center justify-center",
}: AuthFormFieldProps) => {
  const hasError = Boolean(error);
  const errorId = hasError ? `${id}-error` : undefined;
  const placeholderClass = hasError ? "placeholder:text-[#F4161A]" : placeholderClassName;
  const fieldStyle = { borderColor: hasError ? "#F4161A" : fieldBorderColor, backgroundColor: fieldBackgroundColor };
  return (
    <div className={`${showTopSpacing ? "mt-[24px]" : ""} flex w-full flex-col ${containerClassName}`}>
      <AuthFieldLabel label={label} htmlFor={id} className={labelClassName} color={hasError ? "#F4161A" : labelColor} />
      <div className={`${labelInputGapClassName} flex h-[48px] w-full items-center gap-[10px] rounded-[8px] border-[1.5px] px-[13px] py-[12px] pr-[15px] ${inputBoxClassName}`} style={fieldStyle}>
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
          aria-invalid={hasError}
          aria-describedby={errorId}
          className={`h-full w-full border-0 bg-transparent p-0 text-[14px] leading-[100%] text-[#141414] outline-none ${placeholderClass}`}
          style={{ fontWeight: 500 }}
        />
        {trailingIcon && onTrailingIconClick && trailingIconAriaLabel ? (
          <button type="button" aria-label={trailingIconAriaLabel} onClick={onTrailingIconClick}>
            {trailingIcon}
          </button>
        ) : trailingIcon ? (
          <span className={trailingIconContainerClassName}>{trailingIcon}</span>
        ) : null}
      </div>
      {hasError ? (
        <p id={errorId} className="mt-[5px] h-[15px] w-full text-[12px] leading-[100%] text-[#F4161A]" style={{ fontWeight: 400 }}>
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default AuthFormField;
