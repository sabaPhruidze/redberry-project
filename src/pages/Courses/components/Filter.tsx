// Wraps catalog filter blocks in a vertical sidebar layout.
// Manages multi-select state for categories, topics, and instructors.
import { useState } from "react";
import CLOSE from "../../../assets/icons/authentification/ic_round-close.svg";

import Categories from "./Categories";
import Instructor from "./Instructor";
import Topics from "./Topics";

const toggleId = (items: number[], id: number) =>
  items.includes(id) ? items.filter((item) => item !== id) : [...items, id];

const Filter = () => {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [selectedTopicIds, setSelectedTopicIds] = useState<number[]>([]);
  const [selectedInstructorIds, setSelectedInstructorIds] = useState<number[]>(
    [],
  );

  return (
    <div className="w-[309px]">
      <div className="w-full h-[48px] flex flex-row items-center justify-between">
        <h2 className="text-[#0A0A0A] h-full w-[121px] font-[600] text-[40px] leading-[100%]">
          Filters
        </h2>
        <div className="w-[133px] h-[24px] flex flex-row justify-between items-center ">
          <p className="text-[#8A8A8A] font-[500] leading-[24px]">
            Clear All Filters
          </p>
          <img
            src={CLOSE}
            alt="close icon"
            className="w-[18px] h-[18px] translate-y-0.5"
          />
        </div>
      </div>
      <Categories
        selectedIds={selectedCategoryIds}
        onToggle={(id) => setSelectedCategoryIds((prev) => toggleId(prev, id))}
      />
      <Topics
        selectedIds={selectedTopicIds}
        onToggle={(id) => setSelectedTopicIds((prev) => toggleId(prev, id))}
      />
      <Instructor
        selectedIds={selectedInstructorIds}
        onToggle={(id) => setSelectedInstructorIds((prev) => toggleId(prev, id))}
      />
    </div>
  );
};

export default Filter;
