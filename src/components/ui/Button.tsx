interface ButtonProps {
  text: string;
  classname?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ text, classname, onClick, type = "button" }: ButtonProps) => {
  const hasCustomPadding = !!classname?.match(/(^|\s)p[trblxy]?-[^\s]+/);
  const paddingClass = hasCustomPadding ? "" : "px-[25px] py-[17px]";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${paddingClass} bg-redberry-text-purple text-white rounded-[8px] font-[500] ${classname ?? ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
