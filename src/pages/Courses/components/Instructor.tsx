// Renders instructor filter chips and applies selected highlight colors.
// Keeps existing list structure while using current checkbox selection state.
import useInstructors from "../../../api/hooks/useInstructors";

type InstructorProps = {
  selectedIds: number[];
  onToggle: (id: number) => void;
};

const Instructor = ({ selectedIds, onToggle }: InstructorProps) => {
  const { data, isLoading, error } = useInstructors();

  return (
    <div className="w-[179px] mt-[56px] gap-[24px] flex flex-col">
      <h3 className="text-[#666666] font-[500] text-[18px] leading-[100%] w-[179px] h-[22px]">
        Instructor
      </h3>
      {isLoading ? (
        <p className="text-[14px] text-[#8A8A8A]">Loading...</p>
      ) : null}
      {error ? (
        <p className="text-[14px] text-[#F4161A]">Failed to load.</p>
      ) : null}
      <div className="flex flex-col w-[179px] gap-[8px]">
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
              {item.avatar ? (
                <img
                  src={item.avatar}
                  alt={`${item.name} icon`}
                  className="w-[24px] h-[24px]"
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
      <div className="border-t-[#ADADAD] border-t w-full h-[36px] ">
        <div className="mt-[16px] w-full h-[20px]">
          <p className="text-[#999999] font-[500] leading-[100%] text-[14px]">
            0 Filters Active
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
