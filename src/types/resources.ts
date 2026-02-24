import type { resourceCategories, resourceTypes } from "@/constants";

export type ResourceCategory = (typeof resourceCategories)[number];

export type ResourceType = (typeof resourceTypes)[number];

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: ResourceCategory;
  type: ResourceType;
  tags: string[];
}
