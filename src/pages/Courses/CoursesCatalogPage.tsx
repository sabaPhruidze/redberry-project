// Shares catalog filter state and pagination state across sidebar and cards.
// Keeps the same layout while wiring real-time filtered list behavior.
import { useCallback, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import BreadcrumbCatalog from "./components/BreadcrumbCatalog";
import Cards from "./components/Cards";
import Filter from "./components/Filter";

const toggleId = (items: number[], id: number) =>
  items.includes(id) ? items.filter((item) => item !== id) : [...items, id];

const CoursesCatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [selectedTopicIds, setSelectedTopicIds] = useState<number[]>([]);
  const [selectedInstructorIds, setSelectedInstructorIds] = useState<number[]>(
    [],
  );
  const activeFiltersCount =
    selectedCategoryIds.length +
    selectedTopicIds.length +
    selectedInstructorIds.length;
  const handleClearFilters = () => {
    setCurrentPage(1);
    setSelectedCategoryIds([]);
    setSelectedTopicIds([]);
    setSelectedInstructorIds([]);
  };
  const handleVisibleTopicIdsChange = useCallback((topicIds: number[]) => {
    setSelectedTopicIds((prev) => prev.filter((id) => topicIds.includes(id)));
  }, []);

  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px] pt-[69.5px] pb-[161px]">
        <BreadcrumbCatalog />
        <div className="flex flex-row mt-[34px] gap-[90px]">
          <Filter
            selectedCategoryIds={selectedCategoryIds}
            selectedTopicIds={selectedTopicIds}
            selectedInstructorIds={selectedInstructorIds}
            activeFiltersCount={activeFiltersCount}
            onClearFilters={handleClearFilters}
            onCategoryToggle={(id) => {
              setCurrentPage(1);
              setSelectedCategoryIds((prev) => toggleId(prev, id));
            }}
            onTopicToggle={(id) => {
              setCurrentPage(1);
              setSelectedTopicIds((prev) => toggleId(prev, id));
            }}
            onInstructorToggle={(id) => {
              setCurrentPage(1);
              setSelectedInstructorIds((prev) => toggleId(prev, id));
            }}
            onVisibleTopicIdsChange={handleVisibleTopicIdsChange}
          />
          <Cards
            currentPage={currentPage}
            selectedCategoryIds={selectedCategoryIds}
            selectedTopicIds={selectedTopicIds}
            selectedInstructorIds={selectedInstructorIds}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default CoursesCatalogPage;
