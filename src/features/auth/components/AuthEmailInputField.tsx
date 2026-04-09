type AuthEmailInputFieldProps = {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  autoComplete?: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  name?: string;
  inputRef?: (instance: HTMLInputElement | null) => void;
};

const AuthEmailInputField = ({
  id,
  label,
  value,
  placeholder,
  autoComplete,
  error,
  onChange,
  onBlur,
  name,
  inputRef,
}: AuthEmailInputFieldProps) => {
  const hasError = Boolean(error);
  const placeholderClass = hasError
    ? "placeholder:text-[#F4161A]"
    : "placeholder:text-[#8A8A8A]";

  return (
    <div className="w-[360px]" style={{ fontFamily: "Inter, sans-serif" }}>
      <label
        htmlFor={id}
        className="block h-[17px] w-[360px] text-[14px] leading-[100%]"
        style={{ fontWeight: 500, color: hasError ? "#F4161A" : "#3D3D3D" }}
      >
        {label}
      </label>

      <div
        className="mt-[8px] flex h-[48px] w-[360px] items-center gap-[10px] rounded-[8px] border-[1.5px] bg-white px-[13px] py-[12px] pr-[15px]"
        style={{ borderColor: hasError ? "#F4161A" : "#D1D1D1" }}
      >
        <input
          id={id}
          type="email"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          name={name}
          ref={inputRef}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={`h-full w-full border-0 bg-transparent p-0 text-[14px] leading-[100%] text-[#141414] outline-none ${placeholderClass}`}
          style={{ fontWeight: 500 }}
        />
      </div>

      {hasError ? (
        <p
          className="mt-[5px] h-[15px] w-[360px] text-[12px] leading-[100%] text-[#F4161A]"
          style={{ fontWeight: 400 }}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default AuthEmailInputField;
