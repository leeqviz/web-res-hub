import { ResourceCategory, resources, ResourceType } from "@/constants";
import { useMemo } from "react";

interface UseFilteredResourcesParams {
  searchQuery: string;
  activeCategory: string;
  activeType: string;
}

export function useFilteredResources({
  searchQuery,
  activeCategory,
  activeType,
}: UseFilteredResourcesParams) {
  return useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesCategory =
        activeCategory === ResourceCategory.All ||
        resource.category === activeCategory;

      const matchesType =
        activeType === ResourceType.All || resource.type === activeType;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, activeCategory, activeType]);
}
