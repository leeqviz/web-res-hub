import { Code2 } from "lucide-react";
import { DesktopSearch } from "./desktop-search";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              DevResource<span className="text-indigo-600">Hub</span>
            </h1>
          </div>

          <DesktopSearch />
        </div>
      </div>
    </header>
  );
}
