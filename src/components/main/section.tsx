export function Section() {
  return (
    <section className="mb-12 text-center md:text-left">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Master the Web with <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">
          Free Resources.
        </span>
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl">
        A curated collection of documentation, interactive guides, and exercises
        to level up your HTML, CSS, and JavaScript skills.
      </p>
    </section>
  );
}
