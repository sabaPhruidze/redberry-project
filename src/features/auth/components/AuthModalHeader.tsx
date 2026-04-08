type AuthModalHeaderProps = {
  title: string;
  subtitle: string;
};

const AuthModalHeader = ({ title, subtitle }: AuthModalHeaderProps) => {
  return (
    <div
      className="flex w-[360px] flex-col items-center gap-[6px] text-center"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <h2
        className="h-[39px] w-[360px] text-[32px] leading-[100%]"
        style={{ fontWeight: 600, color: "#141414" }}
      >
        {title}
      </h2>
      <p
        className="h-[17px] w-[360px] text-[14px] leading-[100%]"
        style={{ fontWeight: 500, color: "#666666" }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default AuthModalHeader;
