import { CATEGORIES, TYPES, resources } from "@/constants";
import {
  BookOpen,
  ChevronRight,
  Code2,
  ExternalLink,
  FileCode,
  Filter,
  Globe,
  Palette,
  Search,
  Trophy,
  Wrench,
} from "lucide-react";
import { useMemo, useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [activeType, setActiveType] = useState<(typeof TYPES)[number]>("All");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      const matchesCategory =
        activeCategory === "All" || resource.category === activeCategory;
      const matchesType = activeType === "All" || resource.type === activeType;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, activeCategory, activeType]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "HTML":
        return <FileCode className="w-4 h-4" />;
      case "CSS":
        return <Palette className="w-4 h-4" />;
      case "JS":
        return <Code2 className="w-4 h-4" />;
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
      default:
        return <ChevronRight className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100">
      {/* Header */}
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
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Master the Web with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">
              Free Resources.
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            A curated collection of documentation, interactive guides, and
            exercises to level up your HTML, CSS, and JavaScript skills.
          </p>
        </section>

        {/* Filters */}
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

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {filteredResources.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No resources found
            </h3>
            <p className="text-slate-600">
              Try adjusting your search or filters to find what you're looking
              for.
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
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 mt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-indigo-600" />
            <span className="font-bold text-slate-900">DevResource Hub</span>
          </div>
          <p className="text-slate-500 text-sm">
            Curated with ❤️ for the developer community. All resources listed
            are free to use.
          </p>
        </div>
      </footer>
    </div>
  );
}
