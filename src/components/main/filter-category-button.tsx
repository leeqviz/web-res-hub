import { useAppStore } from "@/stores";
import type { ResourceCategory } from "@/types";

export function FilterCategoryButton({ cat }: { cat: ResourceCategory }) {
  const { activeCategory, setActiveCategory } = useAppStore();

  return (
    <button
      onClick={() => setActiveCategory(cat)}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
        activeCategory === cat
          ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
      }`}
    >
      {cat}
    </button>
  );
}
