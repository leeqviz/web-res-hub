import { ResourceCategory, ResourceType } from "@/constants";
import type { Resource } from "@/types";
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
  Terminal,
  Trophy,
  Wrench,
  Zap,
} from "lucide-react";

export function ResourceCard({ resource }: { resource: Resource }) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case ResourceCategory.HTML:
        return <FileCode className="w-4 h-4" />;
      case ResourceCategory.CSS:
        return <Palette className="w-4 h-4" />;
      case ResourceCategory.JS:
        return <Code2 className="w-4 h-4" />;
      case ResourceCategory.Git:
        return <GitBranch className="w-4 h-4" />;
      case ResourceCategory.SQL:
        return <Database className="w-4 h-4" />;
      case ResourceCategory.Tools:
        return <Terminal className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case ResourceType.Documentation:
        return <BookOpen className="w-4 h-4" />;
      case ResourceType.Exercise:
        return <Trophy className="w-4 h-4" />;
      case ResourceType.Tool:
        return <Wrench className="w-4 h-4" />;
      case ResourceType.Playground:
        return <Play className="w-4 h-4" />;
      case ResourceType.Generator:
        return <Zap className="w-4 h-4" />;
      default:
        return <ChevronRight className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case ResourceCategory.HTML:
        return "bg-orange-50 text-orange-600";
      case ResourceCategory.CSS:
        return "bg-blue-50 text-blue-600";
      case ResourceCategory.JS:
        return "bg-yellow-50 text-yellow-600";
      case ResourceCategory.Git:
        return "bg-red-50 text-red-600";
      case ResourceCategory.SQL:
        return "bg-emerald-50 text-emerald-600";
      case ResourceCategory.Tools:
        return "bg-slate-100 text-slate-600";
      default:
        return "bg-indigo-50 text-indigo-600";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case ResourceType.Documentation:
        return "bg-indigo-50 text-indigo-600";
      case ResourceType.Exercise:
        return "bg-orange-50 text-orange-600";
      case ResourceType.Tool:
        return "bg-red-50 text-red-600";
      case ResourceType.Playground:
        return "bg-yellow-50 text-yellow-600";
      case ResourceType.Generator:
        return "bg-green-50 text-green-600";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div
          className={`p-2 rounded-lg ${getCategoryColor(resource.category)}`}
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

      <span
        className={`inline-flex items-center gap-1 px-2 py-1 rounded ${getTypeColor(resource.type)} text-[10px] font-bold uppercase tracking-wider`}
      >
        {getTypeIcon(resource.type)}
        {resource.type}
      </span>
      <br />
      <div className="flex flex-wrap gap-2 mt-auto">
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
  );
}
