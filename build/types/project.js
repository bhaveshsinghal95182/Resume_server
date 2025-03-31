import { z } from "zod";
export const ProjectLatexSchema = z.object({
    name: z.string(),
    technologies: z.array(z.string()),
    features: z.array(z.string())
});
export const ProjectsLatexSchema = z.array(ProjectLatexSchema);
