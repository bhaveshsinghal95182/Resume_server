import { MetaTag } from "../constants/meta-tag.js";

export interface Project {
  "project-duration": string;
  "project-description": string;
  "meta-tags": MetaTag[];
  "technologies-used": string[];
}

/* 
 Structure 

"Auto-Cide": {
		"project-duration": "4 months",
		"project-description": "An online collaborative Code-IDE that helps in pair programming and all",
		"meta-tags": ["AI", "Sockets", "MERN"],
		"technologies-used": ["MongoDB", "React", "Node", "Express", "Socket.io", "GeminiAPI"]
	}

*/
export type Projects = Record<string, Project>;