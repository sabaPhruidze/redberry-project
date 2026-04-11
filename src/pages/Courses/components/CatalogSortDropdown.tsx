// Renders a custom catalog sort dropdown matching the Figma trigger and menu.
// Keeps simple keyboard and outside-click close behavior for usability.
import { useEffect, useMemo, useRef, useState } from "react";
import ARROW_DOWN from "../../../assets/icons/courses/glyphs_arrow-bold.svg";
import {
  CATALOG_SORT_OPTIONS,
  type CatalogSortValue,
} from "./catalogSort";

type CatalogSortDropdownProps = {
  value: CatalogSortValue;
  onChange: (value: CatalogSortValue) => void;
};

const CatalogSortDropdown = ({ value, onChange }: CatalogSortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const selectedLabel = useMemo(
    () => CATALOG_SORT_OPTIONS.find((item) => item.value === value)?.label ?? "Newest First",
    [value],
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setIsOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="min-w-[234px] w-max h-[49px] bg-[#FFFFFF] border border-[#F5F5F5] rounded-[10px] px-[20px] py-[7px] flex items-center justify-between gap-[8px]"
      >
        <p className="text-[16px] leading-[24px] font-[500] text-[#666666] whitespace-nowrap">
          Sort By: <span className="text-[#4F46E5]">{selectedLabel}</span>
        </p>
        <img src={ARROW_DOWN} alt="sort dropdown icon" className="w-[20px] h-[20px] shrink-0" />
      </button>

      {isOpen ? (
        <div
          role="listbox"
          className="absolute left-0 top-full mt-[3.5px] z-[30] min-w-full w-max h-[223px] overflow-hidden bg-[#FFFFFF] border border-[#F5F5F5] rounded-[10px]"
        >
          {CATALOG_SORT_OPTIONS.map((item) => (
            <button
              key={item.value}
              type="button"
              role="option"
              aria-selected={item.value === value}
              onClick={() => {
                onChange(item.value);
                setIsOpen(false);
              }}
              className={`w-full min-h-[44px] px-[20px] py-[10px] flex items-center gap-[10px] text-left text-[16px] leading-[24px] font-[500] whitespace-nowrap ${
                item.value === value ? "bg-[#DDD8FA] text-[#4F46E5]" : "text-[#666666]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CatalogSortDropdown;
