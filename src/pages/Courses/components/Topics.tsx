// Renders static topic chips and prepares topics query wiring.
// Current integration logs fetched topics state without changing UI.
import useTopics from "../../../api/hooks/useTopics";

const Topics = () => {
  const topicsQuery = useTopics();

  console.log("Topics filter query:", {
    data: topicsQuery.data,
    isLoading: topicsQuery.isLoading,
    error: topicsQuery.error,
  });

  const TOPICS = [
    {
      id: 1,
      name: "React",
    },
    {
      id: 2,
      name: "TypeScript",
    },
    {
      id: 3,
      name: "Phyton",
    },
    {
      id: 4,
      name: "UX/UI",
    },
    {
      id: 5,
      name: "Figma",
    },
    {
      id: 6,
      name: "JavaScript",
    },
    {
      id: 7,
      name: "Node.js",
    },
    {
      id: 8,
      name: "Machine Learning",
    },
    {
      id: 9,
      name: "Seo",
    },
    {
      id: 10,
      name: "Analytics",
    },
  ];
  return (
    <div className="w-full h-[229px] mt-[56px]">
      <h3 className="w-full h-[22px] text-[#666666] font-[500] text-[18px] leading-[100%]">
        Topics
      </h3>
      <div className="mt-[24px] w-full h-[133px] flex flex-row flex-wrap gap-[8px]">
        {TOPICS.map((item) => (
          <div
            key={item.id}
            className="px-[12px] py-[8px] gap-[10px] flex flex-row bg-white rounded-[12px]"
          >
            <h4 className="text-[#666666] font-[500] leading-[24px]">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
