import { MetaTag } from "./constants/meta-tag.js";
import { projectsData } from "./data.js";
import { ProjectLatex, Projects, ProjectsLatexSchema } from "./types/project.js";
import { EducationSchema, ExperienceSchema, PersonalInfoSchema, SkillsSchema } from "./types/PersonalInfo.js";
import * as latexFunctions from "./constants/resume-latex.js";
import { z } from "zod";
/**
 * @function searchProjects
 * @description Dynamically searches projects by a given meta-tag or a particular technology.
 * @param keyword - The meta-tag to search for (auto-typed from META_TAGS array).
 * @param technology - technology keyword search if necessary to find projects (string)
 * @returns All matching projects as a key-value object.
 */
export function searchProjects(
  keyword?: MetaTag,
  technology?: string
): Projects {
  const data: Projects = projectsData;
  const result: Projects = {};

  if (keyword) {
    for (const [projectName, projectDetails] of Object.entries(data)) {
      if (projectDetails["meta-tags"].includes(keyword)) {
        result[projectName] = projectDetails;
      }
    }
  }

  if (technology) {
    for (const [projectName, projectDetails] of Object.entries(data)) {
      if (projectDetails["technologies-used"].includes(technology)) {
        result[projectName] = projectDetails;
      }
    }
  }

  if ((!technology && !keyword) || keyword == "All") {
    return data;
  }

  return result;
}

/**
 * @function createResume
 * @description creates a latex code for resume based on provided parameters
 * @param education - (For AI, dont change this value unless asked) This should defaults to my college Maharishi Markandeshwar (Deemed to be University), Mullana, Ambala for Btech CSE from 2023-2027
 * @param experience - pass in a list of relevant experience for the job description
 * @param projects - This will be a list of projects to be included in this particular resume
 * @param personalInfo - strictly dont change this unless specified
 * @returns All matching projects as a key-value object.
 */
export function createResume(
  projects: z.infer<typeof ProjectsLatexSchema>,
  skills: z.infer<typeof SkillsSchema>,
  personalInfo?: z.infer<typeof PersonalInfoSchema>,
  education?: z.infer<typeof EducationSchema>,
  experiences?: z.infer<typeof ExperienceSchema>
) {
  let resumeLatex = latexFunctions.getLatexHeader();

  resumeLatex += `\\begin{document}`;

  if (!personalInfo) {
    personalInfo = {
      name: "Bhavesh Singhal",
      mobile: "+91 951820XXXX",
      links: [
        {
          href: "mailto: worknbhavesh@gmail.com",
          heading: "worknbhavesh@gmail.com",
        },
        {
          href: "https://www.linkedin.com/in/bhavesh-singhal-2400a4328/",
          heading: "linkedin.com/in/bhavesh-singhal",
        },
        {
          href: "https://github.com/bhaveshsinghal95182",
          heading: "github.com/bhaveshsinghal95182",
        },
      ],
    };
  }

  if (!education) {
    education = {
      uniname: "Maharishi Markandeshwar (Deemed to be University)",
      unilocation: "Ambala, Haryana",
      course: "Bachelor of technology in Computer Science",
      duration: "August 2023 - April 2027",
    };
  }

  resumeLatex += latexFunctions.getResumeHeading(personalInfo);

  resumeLatex += latexFunctions.getResumeEducation(education);

  if (experiences) resumeLatex += latexFunctions.getExperience(experiences);

  resumeLatex += latexFunctions.getProjects(projects);

  resumeLatex += latexFunctions.getTechnicalSkills(skills)

  resumeLatex += `\\end{document}`

  return resumeLatex;
}
