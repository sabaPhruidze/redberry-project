// Shows catalog result text and renders the custom sort dropdown trigger/menu.
// Keeps the existing top area spacing while using real sort state.
import CatalogSortDropdown from "./CatalogSortDropdown";
import type { CatalogSortValue } from "./catalogSort";

type CardsTopProps = {
  total: number;
  visibleCount: number;
  isLoading: boolean;
  sortValue: CatalogSortValue;
  onSortChange: (value: CatalogSortValue) => void;
};

const CardsTop = ({
  total,
  visibleCount,
  isLoading,
  sortValue,
  onSortChange,
}: CardsTopProps) => {
  const resultsText = isLoading
    ? "Loading courses..."
    : total > 0
      ? `Showing ${visibleCount} of ${total} courses`
      : "No courses found";

  return (
    <div className="w-full h-[49px] flex flex-row justify-between items-center">
      <div className="flex-1 h-[24px]">
        <p className="h-full text-[#666666] font-[500] leading-[24px]">{resultsText}</p>
      </div>
      <CatalogSortDropdown value={sortValue} onChange={onSortChange} />
    </div>
  );
};

export default CardsTop;
