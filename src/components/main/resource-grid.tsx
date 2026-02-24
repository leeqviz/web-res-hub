import { useDebounce, useFilteredResources } from "@/hooks";
import { useAppStore } from "@/stores";
import { Search } from "lucide-react";
import { ResourceCard } from "./resource-card";

export function ResourceGrid() {
  const { searchQuery, activeCategory, activeType, resetFilters } =
    useAppStore();

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const filteredResources = useFilteredResources({
    searchQuery: debouncedSearchQuery,
    activeCategory,
    activeType,
  });

  return filteredResources.length === 0 ? (
    <div className="text-center py-20">
      <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Search className="w-8 h-8 text-slate-400" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        No resources found
      </h3>
      <p className="text-slate-600">
        Try adjusting your search or filters to find what you're looking for.
      </p>
      <button
        onClick={resetFilters}
        className="mt-6 text-indigo-600 font-semibold hover:underline"
      >
        Clear all filters
      </button>
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <p className="col-span-full text-center text-slate-500">
        Showing {filteredResources.length} resources
      </p>
      {filteredResources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}
