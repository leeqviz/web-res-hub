import type { ResourceCategory, ResourceType } from "@/types";
import { create } from "zustand";

interface AppState {
  searchQuery: string;
  activeCategory: ResourceCategory;
  activeType: ResourceType;
  setSearchQuery: (query: string) => void;
  setActiveCategory: (category: ResourceCategory) => void;
  setActiveType: (type: ResourceType) => void;
  resetFilters: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  searchQuery: "",
  activeCategory: "All",
  activeType: "All",
  setSearchQuery: (query) => set({ searchQuery: query }),
  setActiveCategory: (category) => set({ activeCategory: category }),
  setActiveType: (type) => set({ activeType: type }),
  resetFilters: () =>
    set({
      searchQuery: "",
      activeCategory: "All",
      activeType: "All",
    }),
}));
