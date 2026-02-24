export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: "HTML" | "CSS" | "JS" | "General" | "Git" | "SQL" | "Tools";
  type:
    | "Documentation"
    | "Guide"
    | "Exercise"
    | "Tool"
    | "Playground"
    | "Generator";
  tags: string[];
}
