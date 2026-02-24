import { resourceCategories, resourceTypes } from "@/constants";
import { BookOpen, Filter } from "lucide-react";
import { FilterCategoryButton } from "./filter-category-button";
import { FilterTypeButton } from "./filter-type-button";
import { MobileSearch } from "./mobile-search";

export function Filters() {
  return (
    <div className="flex flex-col gap-6 mb-10">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mr-2">
          <Filter className="w-4 h-4" />
          <span>Category:</span>
        </div>
        {resourceCategories.map((category) => (
          <FilterCategoryButton key={category} category={category} />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mr-2">
          <BookOpen className="w-4 h-4" />
          <span>Type:</span>
        </div>
        {resourceTypes.map((type) => (
          <FilterTypeButton key={type} type={type} />
        ))}
      </div>

      <MobileSearch />
    </div>
  );
}
