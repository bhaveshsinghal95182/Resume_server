import { MetaTag } from "../constants/meta-tag.js";
import { z } from "zod";

export interface Project {
  "project-duration": string;
  "project-description": string;
  "meta-tags": MetaTag[];
  "technologies-used": string[];
  "active-links"?: string;
  "Backstory"?: string
}

export interface ProjectLatex {
	"name": string;
	"technologies": string[];
	"features": string[]
}

export const ProjectLatexSchema = z.object({
  name: z.string(),
  technologies: z.array(z.string()),
  features: z.array(z.string())
});

export const ProjectsLatexSchema = z.array(ProjectLatexSchema)

export type Projects = Record<string, Project>;