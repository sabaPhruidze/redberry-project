type AuthFieldLabelProps = {
  label: string;
  htmlFor?: string;
  className?: string;
  color?: string;
};

const AuthFieldLabel = ({
  label,
  htmlFor,
  className = "w-full",
  color = "#3D3D3D",
}: AuthFieldLabelProps) => {
  const sharedProps = {
    className: `h-[17px] text-[14px] leading-[100%] ${className}`,
    style: { fontFamily: "Inter, sans-serif", fontWeight: 500, color },
  };

  if (!htmlFor) {
    return <p {...sharedProps}>{label}</p>;
  }

  return (
    <label htmlFor={htmlFor} {...sharedProps}>
      {label}
    </label>
  );
};

export default AuthFieldLabel;
