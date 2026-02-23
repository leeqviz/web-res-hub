import { CATEGORIES, TYPES } from "@/constants";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Filters } from "./filters";
import { ResourceGrid } from "./resource-grid";
import { Section } from "./section";

interface MainProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export function Main({ searchQuery, setSearchQuery }: MainProps) {
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("All");

  const [activeType, setActiveType] = useState<(typeof TYPES)[number]>("All");

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Section />
      <Filters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeType={activeType}
        setActiveType={setActiveType}
      />
      <ResourceGrid
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeType={activeType}
        setActiveType={setActiveType}
      />
    </main>
  );
}
