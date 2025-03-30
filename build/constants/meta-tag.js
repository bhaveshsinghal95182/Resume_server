import { z } from "zod";
export const META_TAGS = [
    "AI",
    "Machine Learning",
    "full-stack development",
    "frontend development",
    "backend development",
    "Devops",
    "Socket Programming"
];
export const MetaTagSchema = z.enum(META_TAGS);
