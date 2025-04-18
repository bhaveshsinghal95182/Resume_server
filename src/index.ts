import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { createResume, searchProjects } from "./helper.js";
import { MetaTagSchema } from "./constants/meta-tag.js";
import {
  PersonalInfoSchema,
  EducationSchema,
  SkillsSchema,
  ExperienceSchema,
} from "./types/PersonalInfo.js";
import { ProjectsLatexSchema } from "./types/project.js";

// Create server instance
const resume_server = new McpServer({
  name: "resume",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
    prompt: {},
  },
});

resume_server.tool(
  "search-projects",
  "Dynamically searches projects by a given meta-tag or a particular technology. Meta tags are predefined list of words whereas technology can be anything, this tool will return only the relevant projects if keyword or technology is given and will return all the projects if nothing is given",
  {
    keyword: MetaTagSchema.describe(
      `can be anything from the given list of meta tags`
    ),
    technology: z
      .string()
      .describe(
        `can be anything from "MongoDB", "React", "Node", "Express", "Socket.io", "GeminiAPI"`
      ),
  },
  async ({ keyword, technology }) => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(searchProjects(keyword, technology)),
      },
    ],
  })
);

resume_server.tool(
  "get-experience",
  "returns all the job experiences ive had till now. If this returns i dont have any job experience, dont pass experience onto the create resume tool and increase the number of projects in resume",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: "i dont have any job experiences, I am a fresher looking for a job.",
      },
    ],
  })
);

resume_server.tool(
  "create-resume-latex-changeinfo",
  "returns a latex code for resume based on the given information. Only call this when the user wants to change there information. Check the encoding for any typos and errors and return raw latex code",
  {
    personalInfo:
      PersonalInfoSchema.describe(`example personal info => personalInfo = {
      name: "Bhavesh Singhal",
      mobile: "+91 95182XXXXX",
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
  }`),
    education:
      EducationSchema.describe(`example education schema => education = {
      uniname: "Maharishi Markandeshwar (Deemed to be University)",
      unilocation: "Ambala, Haryana",
      course: "Bachelor of technology in Computer Science",
      duration: "August 2023 - April 2027",
    };`),
    experience: ExperienceSchema.describe(
      `enter the experience based on the result of get-experience tool`
    ),
    projects: ProjectsLatexSchema.describe(`A list of all the projects to be included in the resume. These projects can be obtained from search-projects tool. Features in this schema should be a list of real world impact and value that project can provide, some numbers to make it more visually sophisticated and any features of the project. The features should always follow the priority order above mentioned and must always be ATS friendly and keyword rich`),
    skills: SkillsSchema.describe("everything in this should be keyword dense and ATS friendly. Information for this can be extracted from the job description provided by the user and projects included in the resume.")
  },
  async ({personalInfo, education, experience, projects, skills}) => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(createResume(projects,skills, personalInfo, education, experience)),
      },
    ],
  })
);
resume_server.tool(
  "create-resume-latex",
  "returns a latex code for resume based on the given information. Call this tool whenever the user didnt want to change there personal information and just gives a job description to generate a resume based on. Check the encoding for any typos and errors and return raw latex code",
  {
    projects: ProjectsLatexSchema.describe(`A list of all the projects to be included in the resume. These projects can be obtained from search-projects tool. Features in this schema should be a list of real world impact and value that project can provide, some numbers to make it more visually sophisticated and any features of the project. The features should always follow the priority order above mentioned and must always be ATS friendly and keyword rich`),
    skills: SkillsSchema.describe("everything in this should be keyword dense and ATS friendly. Information for this can be extracted from the job description provided by the user and projects included in the resume.")
  },
  async ({ projects, skills}) => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(createResume(projects,skills)),
      },
    ],
  })
);

async function main() {
  const transport = new StdioServerTransport();
  await resume_server.connect(transport);
  console.error("Resume MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
