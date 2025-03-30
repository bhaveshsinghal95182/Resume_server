import { projectsData } from "./data.js";
/**
 * @function searchProjects
 * @description Dynamically searches projects by a given meta-tag or a particular technology.
 * @param keyword - The meta-tag to search for (auto-typed from META_TAGS array).
 * @param technology - technology keyword search if necessary to find projects (string)
 * @returns All matching projects as a key-value object.
 */
export function searchProjects(keyword, technology) {
    const data = projectsData;
    const result = {};
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
    if (!technology && !keyword) {
        return data;
    }
    return result;
}
