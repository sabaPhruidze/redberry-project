import LOCATION from "../../../assets/icons/courses/location.svg?react";
import type { SessionTypeOption } from "../../../types/courseDetail";
import SessionTypeAvailability from "./SessionTypeAvailability";
import { formatPriceModifier, getSessionTypeKind, getSeatsStatusText } from "./sessionTypeOptionUtils";
import SessionTypeIcon from "./SessionTypeIcon";

interface SessionTypeCardProps {
  option: SessionTypeOption;
  isSelected: boolean;
  onSelect: (sessionTypeId: number) => void;
}
const SessionTypeCard = ({ option, isSelected, onSelect }: SessionTypeCardProps) => {
  const sessionTypeName = option.name?.trim() ?? "";
  const locationText = option.location?.trim() || "Chavchavadze St.34";
  const sessionTypeKind = getSessionTypeKind(sessionTypeName);
  const isFullyBooked = option.availableSeats === 0;
  const isUnavailable = isFullyBooked || option.isAvailable === false || option.available === false;
  const hasLimitedSeats = !isUnavailable && option.availableSeats > 0 && option.availableSeats < 5;
  const statusText = getSeatsStatusText(option.availableSeats);
  const textColor = isUnavailable ? "text-[#D1D1D1]" : isSelected ? "text-[#4F46E5]" : "text-[#525252]";
  return (
    <div className="w-[171.3px] h-[154px] flex flex-col gap-[8px]">
      <button
        type="button"
        disabled={isUnavailable}
        aria-pressed={isSelected}
        onClick={() => onSelect(option.id)}
        className={`text-center w-full h-[131px] rounded-[12px] px-[20px] py-[15px] flex flex-col items-center border ${
          isUnavailable
            ? "border-[#D1D1D1] bg-[#F5F5F5] cursor-not-allowed"
            : isSelected
              ? "border-[#958FEF] bg-[#DDDBFA] cursor-default"
              : "border-[#D1D1D1] bg-white cursor-pointer"
        }`}
      >
        <SessionTypeIcon
          kind={sessionTypeKind}
          isSelected={isSelected}
          isUnavailable={isUnavailable}
        />
        <h3 className={`my-[6px] w-[131.33px] h-[19px] font-[600] leading-[100%] ${textColor}`}>
          {sessionTypeName}
        </h3>
        <div className={`w-[131.3px] h-[15px] font-[400] text-[12px] leading-[100%] flex flex-row items-center justify-center gap-[4px] ${textColor}`}>
          <LOCATION
            aria-hidden
            className={`w-[12px] h-[12px] [&_path]:fill-current ${textColor}`}
          />
          <p>{locationText}</p>
        </div>
        <p
          className={`mt-[12px] w-[131.33px] h-[17px] text-center text-[14px] font-[500] leading-[100%] ${
            isUnavailable ? "text-[#D1D1D1]" : "text-[#736BEA]"
          }`}
        >
          {formatPriceModifier(option.priceModifier)}
        </p>
      </button>
      <div className="w-full text-center">
        <SessionTypeAvailability
          isUnavailable={isUnavailable}
          hasLimitedSeats={hasLimitedSeats}
          statusText={statusText}
        />
      </div>
    </div>
  );
};
export default SessionTypeCard;
