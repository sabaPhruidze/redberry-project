interface TotalPriceProps {
  basePrice: number;
  sessionTypeModifier: number;
  totalPrice: number;
  isEnrollButtonActive: boolean;
  isEnrollPending: boolean;
  onEnroll: () => void;
}

const toSafeNumber = (value: unknown) => {
  const amount = Number(value);
  return Number.isFinite(amount) ? amount : 0;
};

const formatPrice = (value: number) => `$${toSafeNumber(value).toFixed(2)}`;

const formatModifier = (value: number) => {
  const safeValue = toSafeNumber(value);

  if (safeValue === 0) {
    return "+ $0";
  }

  const amount = Math.abs(safeValue).toFixed(2);
  const prefix = safeValue > 0 ? "+" : "-";

  return `${prefix} $${amount}`;
};

const TotalPrice = ({
  basePrice,
  sessionTypeModifier,
  totalPrice,
  isEnrollButtonActive,
  isEnrollPending,
  onEnroll,
}: TotalPriceProps) => {
  return (
    <div className="w-[530px] h-[306px] p-[40px] border border-[#F5F5F5] rounded-[12px] bg-white">
      <div className="w-full h-[39px] flex flex-row justify-between items-center">
        <p className="font-[600] text-[20px] leading-[24px] text-[#8A8A8A] ">
          Total Price
        </p>
        <p className="text-[#292929] text-[32px] font-[600] leading-[100%]">
          {formatPrice(totalPrice)}
        </p>
      </div>
      <div className="w-[446px] h-[60px] flex flex-col gap-[12px] mt-[32px]">
        <div className="w-full h-[39px] flex flex-row justify-between items-center">
          <p className="font-[500] leading-[24px] text-[#8A8A8A] ">
            Base Price
          </p>
          <p className="text-[#292929] font-[500] leading-[24px]">
            {`+ ${formatPrice(basePrice)}`}
          </p>
        </div>
        <div className="w-full h-[39px] flex flex-row justify-between items-center">
          <p className="font-[500] leading-[24px] text-[#8A8A8A] ">
            Session Type
          </p>
          <p className="text-[#292929] font-[500] leading-[24px]">
            {formatModifier(sessionTypeModifier)}
          </p>
        </div>
      </div>
      <button
        type="button"
        disabled={!isEnrollButtonActive || isEnrollPending}
        onClick={onEnroll}
        className={`mt-[32px] w-full h-[63px] rounded-[12px] text-[20px] font-[600] text-center leading-[24px] ${
          isEnrollButtonActive && !isEnrollPending
            ? "bg-[#281ED2] text-[#FFFFFF]"
            : "bg-[#EEEDFC] text-[#B7B3F4]"
        }`}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default TotalPrice;
