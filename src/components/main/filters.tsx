import { CATEGORIES, TYPES } from "@/constants";
import { BookOpen, Filter, Search } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<(typeof CATEGORIES)[number]>>;
  activeType: string;
  setActiveType: Dispatch<SetStateAction<(typeof TYPES)[number]>>;
}

export function Filters({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  activeType,
  setActiveType,
}: FiltersProps) {
  return (
    <div className="flex flex-col gap-6 mb-10">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mr-2">
          <Filter className="w-4 h-4" />
          <span>Category:</span>
        </div>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mr-2">
          <BookOpen className="w-4 h-4" />
          <span>Type:</span>
        </div>
        {TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeType === type
                ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Mobile Search */}
      <div className="md:hidden relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
        />
      </div>
    </div>
  );
}
