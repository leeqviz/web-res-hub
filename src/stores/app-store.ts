import { ResourceCategory, ResourceType } from "@/constants";
import type { ResourceCategoryValue, ResourceTypeValue } from "@/types";
import { create } from "zustand";

interface AppState {
  searchQuery: string;
  activeCategory: ResourceCategoryValue;
  activeType: ResourceTypeValue;
  setSearchQuery: (query: string) => void;
  setActiveCategory: (category: ResourceCategoryValue) => void;
  setActiveType: (type: ResourceTypeValue) => void;
  resetFilters: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  searchQuery: "",
  activeCategory: ResourceCategory.All,
  activeType: ResourceType.All,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setActiveCategory: (category) => set({ activeCategory: category }),
  setActiveType: (type) => set({ activeType: type }),
  resetFilters: () =>
    set({
      searchQuery: "",
      activeCategory: ResourceCategory.All,
      activeType: ResourceType.All,
    }),
}));
