import { z } from "zod";

export interface PersonalInfo {
  name: string;
  mobile: string;
  links: link[];
}

export interface link {
  href: string;
  heading: string;
}

export interface Education {
  uniname: string;
  unilocation: string;
  course: string;
  duration: string;
}

export interface Skills {
  languages: string[];
  developerTools: string[];
  frameworks: string[];
  libraries: string[];
}

export interface Experience {
  title: string;
  location: string;
  period: string;
  company: string;
  workdone: string[];
}

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
