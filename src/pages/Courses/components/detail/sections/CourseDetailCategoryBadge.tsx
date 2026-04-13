import { getCategoryIconComponent } from "../../catalog/filters/categoryIconMap";

interface CourseDetailCategoryBadgeProps {
  categoryName: string;
  categoryIcon: string;
}

const CourseDetailCategoryBadge = ({
  categoryName,
  categoryIcon,
}: CourseDetailCategoryBadgeProps) => {
  const Icon = getCategoryIconComponent(categoryIcon);
  const safeCategoryName = categoryName.trim() || "Category";

  return (
    <div className="inline-flex self-start h-[39px] w-fit items-center gap-[10px] rounded-[12px] bg-white px-[12px] py-[8px]">
      {Icon ? (
        <Icon
          aria-hidden
          className="w-[24px] h-[24px] [&_path]:fill-current text-[#525252]"
        />
      ) : null}
      <p className="whitespace-nowrap font-[500] leading-[24px] text-[#666666]">
        {safeCategoryName}
      </p>
    </div>
  );
};

export default CourseDetailCategoryBadge;
