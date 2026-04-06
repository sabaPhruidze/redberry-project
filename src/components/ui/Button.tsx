interface ButtonProps {
  text: string;
  classname?: string;
}

const Button = ({ text, classname }: ButtonProps) => {
  return (
    <button
      className={`${classname} text-[20px] px-[25px] py-[17px] font-[500] bg-redberry-text-purple text-white rounded-[8px]`}
    >
      {text}
    </button>
  );
};

export default Button;
