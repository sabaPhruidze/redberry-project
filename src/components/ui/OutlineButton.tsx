interface OutlineButtonProps {
  text: string;
  classname?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const OutlineButton = ({
  text,
  classname,
  onClick,
  type = "button",
}: OutlineButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classname} border-2 border-redberry-border-purple-light rounded-[8px] text-[20px] text-redberry-text-purple py-[12px] px-[16px] font-[500]`}
    >
      {text}
    </button>
  );
};

export default OutlineButton;
