import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-12 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code2 className="w-5 h-5 text-indigo-600" />
          <span className="font-bold text-slate-900">DevResource Hub</span>
        </div>
        <p className="text-slate-500 text-sm">
          Curated with ❤️ for the developer community. All resources listed are
          free to use.
        </p>
      </div>
    </footer>
  );
}
