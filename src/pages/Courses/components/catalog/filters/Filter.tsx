// Wraps catalog filter blocks in a vertical sidebar layout.
// Receives selected filter state and forwards it to filter sections.
import CLOSE from "../../../../../assets/icons/authentification/ic_round-close.svg";

import Categories from "./Categories";
import Instructor from "./Instructor";
import Topics from "./Topics";

type FilterProps = {
  selectedCategoryIds: number[];
  selectedTopicIds: number[];
  selectedInstructorIds: number[];
  activeFiltersCount: number;
  onClearFilters: () => void;
  onCategoryToggle: (id: number) => void;
  onTopicToggle: (id: number) => void;
  onInstructorToggle: (id: number) => void;
  onVisibleTopicIdsChange: (topicIds: number[]) => void;
};

const Filter = ({
  selectedCategoryIds,
  selectedTopicIds,
  selectedInstructorIds,
  activeFiltersCount,
  onClearFilters,
  onCategoryToggle,
  onTopicToggle,
  onInstructorToggle,
  onVisibleTopicIdsChange,
}: FilterProps) => {
  return (
    <div className="w-[309px]">
      <div className="w-full h-[48px] flex flex-row items-center justify-between">
        <h2 className="text-[#0A0A0A] h-full w-[121px] font-[600] text-[40px] leading-[100%]">
          Filters
        </h2>
        <button
          type="button"
          onClick={onClearFilters}
          className="w-[133px] h-[24px] flex flex-row justify-between items-center bg-transparent border-0 p-0"
          aria-label="Clear all filters"
        >
          <p className="text-[#8A8A8A] font-[500] leading-[24px]">
            Clear All Filters
          </p>
          <img
            src={CLOSE}
            alt="close icon"
            className="w-[18px] h-[18px] translate-y-0.5"
          />
        </button>
      </div>
      <Categories
        selectedIds={selectedCategoryIds}
        onToggle={onCategoryToggle}
      />
      <Topics
        selectedIds={selectedTopicIds}
        selectedCategoryIds={selectedCategoryIds}
        onToggle={onTopicToggle}
        onVisibleTopicIdsChange={onVisibleTopicIdsChange}
      />
      <Instructor
        selectedIds={selectedInstructorIds}
        activeFiltersCount={activeFiltersCount}
        onToggle={onInstructorToggle}
      />
    </div>
  );
};

export default Filter;


