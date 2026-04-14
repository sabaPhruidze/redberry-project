import { useState } from "react";
import CLOSE_ICON from "../../../../../../assets/icons/authentification/ic_round-close.svg";
import STAR_ICON from "../../../../../../assets/icons/home/Star.svg";
import HALF_STAR_ICON from "../../../../../../assets/icons/home/Star (1).svg";
import EMPTY_STAR_ICON from "../../../../../../assets/icons/home/Star (2).svg";

type CompletedRatingSectionProps = {
  onClose: () => void;
  isRated?: boolean;
  onRate?: (rating: number) => Promise<boolean> | boolean;
  isSubmitting?: boolean;
};

const CompletedRatingSection = ({
  onClose,
  isRated = false,
  onRate,
  isSubmitting = false,
}: CompletedRatingSectionProps) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const activeRating = hoveredRating ?? selectedRating ?? 0;

  const handleSelect = async (rating: number) => {
    if (selectedRating != null || isSubmitting || isRated) {
      return;
    }

    const submitResult = onRate?.(rating);
    const isPromise =
      submitResult != null &&
      typeof (submitResult as Promise<unknown>).then === "function";
    const didSubmit = isPromise ? await submitResult : submitResult;

    if (didSubmit === false) {
      return;
    }

    setSelectedRating(rating);
  };

  return (
    <div className="relative flex w-[473px] flex-col items-center gap-[18px] rounded-[8px] bg-white px-[50px] pb-[40px] pt-[40px]">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-[10px] top-[10px] flex h-[22px] w-[22px] items-center justify-center"
        aria-label="Close rating"
      >
        <img src={CLOSE_ICON} alt="" className="h-[22px] w-[22px]" />
      </button>
      <p className="h-[24px] w-[373px] text-center text-[16px] font-[500] leading-[24px] tracking-[0] text-[#525252]">
        Rate your experience
      </p>
      {isRated ? (
        <p className="h-[50px] w-[373px] text-center text-[16px] font-[500] leading-[24px] tracking-[0] text-[#525252]">
          You&apos;ve already rated this course
        </p>
      ) : (
        <div className="flex h-[50px] w-[373px] items-center justify-center gap-[18px]">
          {Array.from({ length: 5 }, (_, index) => {
            const starPosition = index + 1;
            const starIcon =
              activeRating >= starPosition
                ? STAR_ICON
                : activeRating >= starPosition - 0.5
                  ? HALF_STAR_ICON
                  : EMPTY_STAR_ICON;

            return (
              <button
                key={starPosition}
                type="button"
                onClick={() => handleSelect(starPosition)}
                onMouseEnter={() => setHoveredRating(starPosition)}
                onMouseLeave={() => setHoveredRating(null)}
                disabled={isSubmitting}
                className="flex h-[50px] w-[50px] items-center justify-center disabled:cursor-not-allowed"
                aria-label={`Rate ${starPosition} star${starPosition > 1 ? "s" : ""}`}
              >
                <img src={starIcon} alt="rating star" className="h-[50px] w-[50px]" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CompletedRatingSection;
