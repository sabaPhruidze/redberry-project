type HeroArrowsProps = {
  leftIcon: string;
  rightIcon: string;
  canGoPrev: boolean;
  canGoNext: boolean;
  onPrev: () => void;
  onNext: () => void;
};

type HeroArrowButtonProps = {
  icon: string;
  canClick: boolean;
  onClick: () => void;
  ariaLabel: string;
  altText: string;
};

const HeroArrowButton = ({ icon, canClick, onClick, ariaLabel, altText }: HeroArrowButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!canClick}
      aria-label={ariaLabel}
      className="h-[54px] w-[54px] disabled:cursor-not-allowed"
    >
      <img src={icon} alt={altText} className="h-[54px] w-[54px]" />
    </button>
  );
};

const HeroArrows = ({
  leftIcon,
  rightIcon,
  canGoPrev,
  canGoNext,
  onPrev,
  onNext,
}: HeroArrowsProps) => {
  return (
    <div className="flex h-[54px] w-[132px] items-center gap-[24px]">
      <HeroArrowButton
        icon={leftIcon}
        canClick={canGoPrev}
        onClick={onPrev}
        ariaLabel="Previous slide"
        altText="Previous slide arrow"
      />
      <HeroArrowButton
        icon={rightIcon}
        canClick={canGoNext}
        onClick={onNext}
        ariaLabel="Next slide"
        altText="Next slide arrow"
      />
    </div>
  );
};

export default HeroArrows;
