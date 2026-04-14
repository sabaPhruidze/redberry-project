// Connects catalog list, sorting, and pagination using real backend course data.
// Applies real-time filters before sorting and client-side pagination.
import { useMemo, useState } from "react";
import useCourses from "../../../../../api/hooks/courses/useCourses";
import CardsMiddle from "./CardsMiddle";
import CardsTop from "./CardsTop";
import Pagination from "./Pagination";
import {
  filterCatalogCourses,
  sortCatalogCourses,
  type CatalogSortValue,
} from "../utils/catalogQueryUtils";

type CardsProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
  selectedCategoryIds: number[];
  selectedTopicIds: number[];
  selectedInstructorIds: number[];
};

const Cards = ({
  currentPage,
  onPageChange,
  selectedCategoryIds,
  selectedTopicIds,
  selectedInstructorIds,
}: CardsProps) => {
  const [sortValue, setSortValue] = useState<CatalogSortValue>("newest-first");
  const { data, isLoading, error } = useCourses();

  const courses = useMemo(() => data?.data ?? [], [data]);
  const meta = data?.meta;
  const filteredCourses = useMemo(
    () =>
      filterCatalogCourses(courses, {
        selectedCategoryIds,
        selectedTopicIds,
        selectedInstructorIds,
      }),
    [courses, selectedCategoryIds, selectedTopicIds, selectedInstructorIds],
  );
  const sortedCourses = useMemo(
    () => sortCatalogCourses(filteredCourses, sortValue),
    [filteredCourses, sortValue],
  );
  const perPage = meta?.perPage ?? 9;
  const lastPage = Math.max(1, Math.ceil(sortedCourses.length / perPage));
  const safePage = Math.min(Math.max(currentPage, 1), lastPage);
  const paginatedCourses = sortedCourses.slice(
    (safePage - 1) * perPage,
    safePage * perPage,
  );

  return (
    <div className="w-[1167px]">
      <CardsTop
        total={sortedCourses.length}
        visibleCount={paginatedCourses.length}
        isLoading={isLoading}
        sortValue={sortValue}
        onSortChange={setSortValue}
      />
      {isLoading ? (
        <p className="mt-[32px] text-[16px] text-[#8A8A8A]">
          Loading courses...
        </p>
      ) : null}
      {error ? (
        <p className="mt-[32px] text-[16px] text-[#F4161A]">
          {error instanceof Error ? error.message : "Failed to load courses."}
        </p>
      ) : null}
      {!isLoading && !error ? <CardsMiddle courses={paginatedCourses} /> : null}
      <Pagination
        currentPage={safePage}
        lastPage={lastPage}
        perPage={perPage}
        total={sortedCourses.length}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Cards;
