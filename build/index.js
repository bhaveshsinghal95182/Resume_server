import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { searchProjects } from "./helper.js";
import { MetaTagSchema } from "./constants/meta-tag.js";
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
resume_server.tool("search-projects", "Dynamically searches projects by a given meta-tag or a particular technology. Meta tags are predefined list of words whereas technology can be anything, this tool will return only the relevant projects if keyword or technology is given and will return all the projects if nothing is given", {
    keyword: MetaTagSchema.describe(`can be anything from "AI",
    "full-stack development",
    "frontend development",
    "backend development",
    "Devops",
    "Socket Programming"`),
    technology: z
        .string()
        .describe(`can be anything from "MongoDB", "React", "Node", "Express", "Socket.io", "GeminiAPI"`),
}, async ({ keyword, technology }) => ({
    content: [
        {
            type: "text",
            text: JSON.stringify(searchProjects(keyword, technology)),
        },
    ],
}));
async function main() {
    const transport = new StdioServerTransport();
    await resume_server.connect(transport);
    console.error("Resume MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
