type AuthPasswordInputFieldProps = {
  id: string;
  label: string;
  value: string;
  type: "password" | "text";
  placeholder: string;
  icon: string;
  iconAlt: string;
  ariaLabel: string;
  showTopSpacing?: boolean;
  error?: string;
  onChange: (value: string) => void;
  onToggleVisibility: () => void;
};

const AuthPasswordInputField = ({
  id,
  label,
  value,
  type,
  placeholder,
  icon,
  iconAlt,
  ariaLabel,
  showTopSpacing = false,
  error,
  onChange,
  onToggleVisibility,
}: AuthPasswordInputFieldProps) => {
  return (
    <>
      <label
        htmlFor={id}
        className={`${showTopSpacing ? "mt-[16px]" : ""} block h-[17px] w-[360px] text-[14px] leading-[100%]`}
        style={{ fontWeight: 500, color: "#3D3D3D" }}
      >
        {label}
      </label>
      <div className="mt-[8px] flex h-[48px] w-[360px] items-center gap-[10px] rounded-[8px] border-[1.5px] border-[#D1D1D1] bg-white px-[13px] py-[12px] pr-[15px]">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="h-full w-full border-0 bg-transparent p-0 text-[14px] leading-[100%] text-[#141414] outline-none placeholder:text-[#8A8A8A]"
          style={{ fontWeight: 500 }}
        />
        <button type="button" aria-label={ariaLabel} onClick={onToggleVisibility}>
          <img src={icon} alt={iconAlt} className="h-[22px] w-[22px]" />
        </button>
      </div>
      {error && (
        <p className="mt-[6px] text-[12px] leading-[100%] text-[#D14343]">{error}</p>
      )}
    </>
  );
};

export default AuthPasswordInputField;
