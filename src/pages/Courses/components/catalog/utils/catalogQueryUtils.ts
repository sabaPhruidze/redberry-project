import type { CourseCardItem } from "../../../../../types/courses";

export type CatalogSortValue =
  | "newest-first"
  | "price-low-high"
  | "price-high-low"
  | "most-popular"
  | "title-a-z";

export type CatalogFilterState = {
  selectedCategoryIds: number[];
  selectedTopicIds: number[];
  selectedInstructorIds: number[];
};

export const CATALOG_SORT_OPTIONS: Array<{ value: CatalogSortValue; label: string }> = [
  { value: "newest-first", label: "Newest First" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "most-popular", label: "Most Popular" },
  { value: "title-a-z", label: "Title: A-Z" },
];

const matchesSelectedIds = (selectedIds: number[], value?: number) => {
  if (!selectedIds.length) return true;
  if (value === undefined) return false;
  return selectedIds.includes(value);
};

export const filterCatalogCourses = (
  courses: CourseCardItem[],
  filters: CatalogFilterState,
) =>
  courses.filter((course) => {
    const categoryMatch = matchesSelectedIds(
      filters.selectedCategoryIds,
      course.category?.id,
    );
    const topicMatch = matchesSelectedIds(filters.selectedTopicIds, course.topic?.id);
    const instructorMatch = matchesSelectedIds(
      filters.selectedInstructorIds,
      course.instructor?.id,
    );

    return categoryMatch && topicMatch && instructorMatch;
  });

export const sortCatalogCourses = (
  courses: CourseCardItem[],
  sortValue: CatalogSortValue,
) => {
  const sorted = [...courses];

  switch (sortValue) {
    case "price-low-high":
      return sorted.sort((a, b) => Number(a.basePrice) - Number(b.basePrice));
    case "price-high-low":
      return sorted.sort((a, b) => Number(b.basePrice) - Number(a.basePrice));
    case "most-popular":
      return sorted.sort(
        (a, b) =>
          Number(b.reviewCount) - Number(a.reviewCount) ||
          Number(b.avgRating) - Number(a.avgRating),
      );
    case "title-a-z":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted.sort((a, b) => b.id - a.id);
  }
};
