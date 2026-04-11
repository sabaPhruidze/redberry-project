// Connects catalog list, sorting, and pagination using real backend course data.
// Keeps the existing grid and top section while wiring sort dropdown behavior.
import { useMemo, useState } from "react";
import useCourses from "../../../api/hooks/useCourses";
import CardsMiddle from "./CardsMiddle";
import CardsTop from "./CardsTop";
import Pagination from "./Pagination";
import {
  sortCatalogCourses,
  type CatalogSortValue,
} from "./catalogSort";

const Cards = () => {
  const [page, setPage] = useState(1);
  const [sortValue, setSortValue] = useState<CatalogSortValue>("newest-first");
  const { data, isLoading, error } = useCourses(page);

  const courses = useMemo(() => data?.data ?? [], [data]);
  const meta = data?.meta;
  const sortedCourses = useMemo(
    () => sortCatalogCourses(courses, sortValue),
    [courses, sortValue],
  );

  return (
    <div className="w-[1167px]">
      <CardsTop
        total={meta?.total ?? 0}
        visibleCount={sortedCourses.length}
        isLoading={isLoading}
        sortValue={sortValue}
        onSortChange={setSortValue}
      />
      {isLoading ? (
        <p className="mt-[32px] text-[16px] text-[#8A8A8A]">Loading courses...</p>
      ) : null}
      {error ? (
        <p className="mt-[32px] text-[16px] text-[#F4161A]">
          {error instanceof Error ? error.message : "Failed to load courses."}
        </p>
      ) : null}
      {!isLoading && !error ? <CardsMiddle courses={sortedCourses} /> : null}
      <Pagination
        currentPage={meta?.currentPage ?? page}
        lastPage={meta?.lastPage ?? 1}
        perPage={meta?.perPage ?? courses.length}
        total={meta?.total ?? 0}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Cards;
