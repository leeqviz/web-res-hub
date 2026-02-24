import { useAppStore } from "@/stores";
import type { ResourceTypeValue } from "@/types";

export function FilterTypeButton({ type }: { type: ResourceTypeValue }) {
  const { activeType, setActiveType } = useAppStore();

  return (
    <button
      onClick={() => setActiveType(type)}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
        activeType === type
          ? "bg-violet-600 text-white shadow-md shadow-violet-200"
          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
      }`}
    >
      {type}
    </button>
  );
}
