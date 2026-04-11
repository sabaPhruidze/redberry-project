// Renders topic filter chips and applies selected highlight colors.
// Keeps existing chip layout while using current checkbox selection state.
import useTopics from "../../../api/hooks/useTopics";

type TopicsProps = {
  selectedIds: number[];
  onToggle: (id: number) => void;
};

const Topics = ({ selectedIds, onToggle }: TopicsProps) => {
  const { data, isLoading, error } = useTopics();

  return (
    <div className="w-full mt-[56px]">
      <h3 className="w-full h-[22px] text-[#666666] font-[500] text-[18px] leading-[100%]">
        Topics
      </h3>
      {isLoading ? (
        <p className="mt-[24px] text-[14px] text-[#8A8A8A]">Loading...</p>
      ) : null}
      {error ? (
        <p className="mt-[24px] text-[14px] text-[#F4161A]">Failed to load.</p>
      ) : null}
      <div className="mt-[24px] w-full flex flex-row flex-wrap gap-[8px]">
        {data?.map((item) => {
          const isSelected = selectedIds.includes(item.id);

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

export default Topics;
