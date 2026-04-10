import AuthFormField from "./AuthFormField";

type AuthEmailInputFieldProps = {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  autoComplete?: string;
  readOnly?: boolean;
  disabled?: boolean;
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
  readOnly = false,
  disabled = false,
  error,
  onChange,
  onBlur,
  name,
  inputRef,
}: AuthEmailInputFieldProps) => {
  return (
    <div className="w-[360px]" style={{ fontFamily: "Inter, sans-serif" }}>
      <AuthFormField
        id={id}
        label={label}
        type="email"
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        readOnly={readOnly}
        disabled={disabled}
        error={error}
        labelColor="#3D3D3D"
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        inputRef={inputRef}
      />
    </div>
  );
};

export default AuthEmailInputField;
