// Renders static category chips and prepares category query integration.
// Data is fetched now only for logging in the first catalog step.
import DEVELOPMENT from "../../../assets/icons/courses/Icon Set=Development.svg";
import DESIGN from "../../../assets/icons/courses/Icon Set=Design.svg";
import BUSINESS from "../../../assets/icons/courses/Icon Set=Business.svg";
import DATA_SCIENCE from "../../../assets/icons/courses/Icon Set=Data Science.svg";
import MARKETING from "../../../assets/icons/courses/Icon Set=Marketing.svg";
import useCategories from "../../../api/hooks/useCategories";

const Categories = () => {
  const categoriesQuery = useCategories();

  console.log("Categories filter query:", {
    data: categoriesQuery.data,
    isLoading: categoriesQuery.isLoading,
    error: categoriesQuery.error,
  });

  const CATEGORIES = [
    {
      id: 1,
      img: DEVELOPMENT,
      name: "Development",
    },
    {
      id: 2,
      img: DESIGN,
      name: "Design",
    },
    {
      id: 3,
      img: BUSINESS,
      name: "Business",
    },
    {
      id: 4,
      img: DATA_SCIENCE,
      name: "Data Science",
    },
    {
      id: 5,
      img: MARKETING,
      name: "Marketing",
    },
  ];
  return (
    <div className="w-full h-[179px] mt-[32px]">
      <h3 className="text-[#666666] font-[500] text-[18px] leading-[100%] w-full h-[22px]">
        Categories
      </h3>
      <div className="mt-[24px] w-full h-[133px] flex flex-row flex-wrap gap-[8px]">
        {CATEGORIES.map((item) => (
          <div
            key={item.id}
            className="px-[12px] py-[8px] gap-[10px] flex flex-row bg-white rounded-[12px]"
          >
            <img
              src={item.img}
              alt={`${item.name} icon`}
              className="w-[24px] h-[24px]"
            />
            <h4 className="text-[#666666] font-[500] leading-[24px]">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
