import { useAppStore } from "@/stores";
import { Search } from "lucide-react";

export function DesktopSearch() {
  const { searchQuery, setSearchQuery } = useAppStore();

  return (
    <div className="hidden md:flex items-center gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
        />
      </div>
    </div>
  );
}
