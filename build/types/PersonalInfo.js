import { z } from "zod";
export const LinkSchema = z.object({
    href: z.string().url(),
    heading: z.string(),
});
export const PersonalInfoSchema = z.object({
    name: z.string(),
    mobile: z.string(),
    links: z.array(LinkSchema),
});
export const EducationSchema = z.object({
    uniname: z.string(),
    unilocation: z.string(),
    course: z.string(),
    duration: z.string(),
});
export const SkillsSchema = z.object({
    languages: z.array(z.string()),
    developerTools: z.array(z.string()),
    frameworks: z.array(z.string()),
    libraries: z.array(z.string()),
});
export const ExperienceSchema = z.array(z.object({
    title: z.string(),
    location: z.string(),
    period: z.string(),
    company: z.string(),
    workdone: z.array(z.string()),
}));
