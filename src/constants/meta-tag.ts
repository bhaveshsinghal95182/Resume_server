import { z } from "zod";

export const META_TAGS = [
    "AI",
    "full-stack development",
    "frontend development",
    "backend development",
    "Devops",
    "Socket Programming"
] as const;

export const MetaTagSchema = z.enum(META_TAGS);
export type MetaTag = z.infer<typeof MetaTagSchema>;