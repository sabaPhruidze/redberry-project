// Renders category filter chips and applies selected highlight colors.
// Keeps the same layout while using existing checkbox selection state.
import useCategories from "../../../api/hooks/useCategories";
import { getCategoryIconComponent } from "./categoryIconMap";

type CategoriesProps = {
  selectedIds: number[];
  onToggle: (id: number) => void;
};

const Categories = ({ selectedIds, onToggle }: CategoriesProps) => {
  const { data, isLoading, error } = useCategories();

  return (
    <div className="w-full mt-[32px]">
      <h3 className="text-[#666666] font-[500] text-[18px] leading-[100%] w-full h-[22px]">
        Categories
      </h3>
      {isLoading ? (
        <p className="mt-[24px] text-[14px] text-[#8A8A8A]">Loading...</p>
      ) : null}
      {error ? (
        <p className="mt-[24px] text-[14px] text-[#F4161A]">Failed to load.</p>
      ) : null}
      <div className="mt-[24px] h-[133px] w-full flex flex-row flex-wrap gap-[8px]">
        {data?.map((item) => {
          const isSelected = selectedIds.includes(item.id);
          const Icon = getCategoryIconComponent(item.icon);

          return (
            <label
              key={item.id}
              className={`px-[12px] py-[8px] gap-[10px] flex flex-row rounded-[12px] ${
                isSelected ? "bg-[#DDDBFA]" : "bg-white"
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(item.id)}
                className="sr-only"
              />
              {Icon ? (
                <Icon
                  aria-hidden
                  className={`w-[24px] h-[24px] [&_path]:fill-current ${
                    isSelected ? "text-[#4F46E5]" : "text-[#525252]"
                  }`}
                />
              ) : null}
              <h4
                className={`font-[500] leading-[24px] ${
                  isSelected ? "text-[#4F46E5]" : "text-[#666666]"
                }`}
              >
                {item.name}
              </h4>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
