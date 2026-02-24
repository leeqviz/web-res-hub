import type { CATEGORIES, TYPES } from "@/constants";
import { useFilteredResources } from "@/hooks";
import {
  BookOpen,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  FileCode,
  GitBranch,
  Globe,
  Palette,
  Play,
  Search,
  Terminal,
  Trophy,
  Wrench,
  Zap,
} from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface ResourceGridProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<(typeof CATEGORIES)[number]>>;
  activeType: string;
  setActiveType: Dispatch<SetStateAction<(typeof TYPES)[number]>>;
}

export function ResourceGrid({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  activeType,
  setActiveType,
}: ResourceGridProps) {
  const filteredResources = useFilteredResources({
    searchQuery,
    activeCategory,
    activeType,
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "HTML":
        return <FileCode className="w-4 h-4" />;
      case "CSS":
        return <Palette className="w-4 h-4" />;
      case "JS":
        return <Code2 className="w-4 h-4" />;
      case "Git":
        return <GitBranch className="w-4 h-4" />;
      case "SQL":
        return <Database className="w-4 h-4" />;
      case "Tools":
        return <Terminal className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Documentation":
        return <BookOpen className="w-4 h-4" />;
      case "Exercise":
        return <Trophy className="w-4 h-4" />;
      case "Tool":
        return <Wrench className="w-4 h-4" />;
      case "Playground":
        return <Play className="w-4 h-4" />;
      case "Generator":
        return <Zap className="w-4 h-4" />;
      default:
        return <ChevronRight className="w-4 h-4" />;
    }
  };

  return filteredResources.length === 0 ? (
    <div className="text-center py-20">
      <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Search className="w-8 h-8 text-slate-400" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        No resources found
      </h3>
      <p className="text-slate-600">
        Try adjusting your search or filters to find what you're looking for.
      </p>
      <button
        onClick={() => {
          setSearchQuery("");
          setActiveCategory("All");
          setActiveType("All");
        }}
        className="mt-6 text-indigo-600 font-semibold hover:underline"
      >
        Clear all filters
      </button>
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <p className="col-span-full text-center text-slate-500">
        Showing {filteredResources.length} resources
      </p>
      {filteredResources.map((resource) => (
        <a
          key={resource.id}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all flex flex-col h-full"
        >
          <div className="flex justify-between items-start mb-4">
            <div
              className={`p-2 rounded-lg ${
                resource.category === "HTML"
                  ? "bg-orange-50 text-orange-600"
                  : resource.category === "CSS"
                    ? "bg-blue-50 text-blue-600"
                    : resource.category === "JS"
                      ? "bg-yellow-50 text-yellow-600"
                      : resource.category === "Git"
                        ? "bg-red-50 text-red-600"
                        : resource.category === "SQL"
                          ? "bg-emerald-50 text-emerald-600"
                          : resource.category === "Tools"
                            ? "bg-slate-100 text-slate-600"
                            : "bg-indigo-50 text-indigo-600"
              }`}
            >
              {getCategoryIcon(resource.category)}
            </div>
            <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors" />
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
            {resource.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
            {resource.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
              {getTypeIcon(resource.type)}
              {resource.type}
            </span>
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
