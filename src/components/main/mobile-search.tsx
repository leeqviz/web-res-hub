import { useAppStore } from "@/stores";
import { Search } from "lucide-react";

export function MobileSearch() {
  const { searchQuery, setSearchQuery } = useAppStore();

  return (
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
  );
}
