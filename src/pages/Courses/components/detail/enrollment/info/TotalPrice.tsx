interface TotalPriceProps {
  basePrice: number;
  sessionTypeModifier: number;
  totalPrice: number;
  isEnrollButtonActive: boolean;
  isEnrollPending: boolean;
  onEnroll: () => void;
  actionText?: string;
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
  actionText = "Enroll Now",
}: TotalPriceProps) => {
  return (
    <div className="h-[306px] w-[530px] rounded-[12px] border border-[#F5F5F5] bg-white p-[40px]">
      <div className="flex h-[39px] w-full flex-row items-center justify-between">
        <p className="text-[20px] font-[600] leading-[24px] text-[#8A8A8A]">
          Total Price
        </p>

        <p className="text-[32px] font-[600] leading-[100%] text-[#292929]">
          {formatPrice(totalPrice)}
        </p>
      </div>

      <div className="mt-[32px] flex h-[60px] w-[446px] flex-col gap-[12px]">
        <div className="flex h-[39px] w-full flex-row items-center justify-between">
          <p className="font-[500] leading-[24px] text-[#8A8A8A]">Base Price</p>

          <p className="font-[500] leading-[24px] text-[#292929]">
            {`+ ${formatPrice(basePrice)}`}
          </p>
        </div>

        <div className="flex h-[39px] w-full flex-row items-center justify-between">
          <p className="font-[500] leading-[24px] text-[#8A8A8A]">
            Session Type
          </p>

          <p className="font-[500] leading-[24px] text-[#292929]">
            {formatModifier(sessionTypeModifier)}
          </p>
        </div>
      </div>

      <button
        type="button"
        disabled={!isEnrollButtonActive || isEnrollPending}
        onClick={onEnroll}
        className={`mt-[32px] h-[63px] w-full rounded-[12px] text-center text-[20px] font-[600] leading-[24px] ${
          isEnrollButtonActive && !isEnrollPending
            ? "bg-[#281ED2] text-[#FFFFFF] cursor-pointer"
            : "bg-[#EEEDFC] text-[#B7B3F4] cursor-not-allowed"
        }`}
      >
        {actionText}
      </button>
    </div>
  );
};

export default TotalPrice;
