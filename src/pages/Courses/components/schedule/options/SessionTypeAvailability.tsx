import WARNING from "../../../../../assets/icons/courses/status/warning.svg";

interface SessionTypeAvailabilityProps {
  isUnavailable: boolean;
  hasLimitedSeats: boolean;
  statusText: string;
}

const SessionTypeAvailability = ({
  isUnavailable,
  hasLimitedSeats,
  statusText,
}: SessionTypeAvailabilityProps) => {
  if (hasLimitedSeats) {
    return (
      <div className="mx-auto flex h-[15px] w-[136px] flex-row items-center justify-center gap-[4px]">
        <img src={WARNING} alt="warning icon" className="w-[16px] h-[16px]" />
        <p className="text-[12px] font-[500] leading-[100%] text-[#F4A316] whitespace-nowrap">
          {statusText}
        </p>
      </div>
    );
  }

  return (
    <p
      className={`mx-auto h-[15px] text-center text-[12px] font-[500] leading-[100%] ${
        isUnavailable ? "text-[#D1D1D1]" : "text-[#3D3D3D]"
      }`}
    >
      {statusText}
    </p>
  );
};

export default SessionTypeAvailability;


