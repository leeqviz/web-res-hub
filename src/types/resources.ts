export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: "HTML" | "CSS" | "JS" | "General";
  type: "Documentation" | "Guide" | "Exercise" | "Tool";
  tags: string[];
}
