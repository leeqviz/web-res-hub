import type { ResourceCategory, ResourceType } from "@/constants";

export type ResourceCategoryValue =
  (typeof ResourceCategory)[keyof typeof ResourceCategory];

export type ResourceTypeValue =
  (typeof ResourceType)[keyof typeof ResourceType];

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: ResourceCategoryValue;
  type: ResourceTypeValue;
  tags: string[];
}
