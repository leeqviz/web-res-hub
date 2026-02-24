import { Filters } from "./filters";
import { ResourceGrid } from "./resource-grid";
import { Section } from "./section";

export function Main() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Section />
      <Filters />
      <ResourceGrid />
    </main>
  );
}
