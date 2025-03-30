import { Projects } from "./types/project.js";

export const projectsData: Projects = {
  "Auto-Cide": {
    "project-duration": "4 months",
    "project-description":
      "An online collaborative Code-IDE that helps in pair programming and also have ai llmms integrated in it that can help in generating and assistance with code. The app is ready in the sense that its backend is converted in a docker compose command for if I can get a server to deploy this quick and easily",
    "meta-tags": [
      "AI",
      "Socket Programming",
      "full-stack development",
      "Devops",
    ],
    "technologies-used": [
      "MongoDB",
      "React",
      "Node",
      "Express",
      "Socket.io",
      "GeminiAPI",
      "Docker",
    ],
    "active-links": "https://github.com/bhaveshsinghal95182/Auto-CIDE",
    Backstory:
      "I needed a tool that can help me with pair programming and teaching programming to one of my pears beacause this tool allows me to talk to the other person or group of people while coding and it all updates in realtime",
  },
  "Ai-visual-teacher": {
    "project-duration": "1 day",
    "project-description":
      "A realtime web app that can answer any academic queries using a picture, created this in a bounty",
    "meta-tags": ["frontend development", "full-stack development", "AI"],
    "technologies-used": ["React", "Nextjs", "GeminiAPI", "typescript"],
    "active-links": "https://ai-visual-teacher.vercel.app/",
    Backstory:
      "This was a bounty project where the person who introduced the bounty said that he wanted his students to use this tool and click pictures of there questions and be able to get answers instantly and easiily with just a picture. I had to get a little crafty with this one because i didn't want to incur any backend server costs, so i used local storage for this and made it so that all the previous questions and answers are stored in the client side",
  },
  "Todo List": {
    "project-duration": "4 week",
    "project-description":
      "A realtime web app that can store todos in appwrite backend with authentication and light and dark theme",
    "meta-tags": [
      "frontend development",
      "backend development",
      "full-stack development",
    ],
    "technologies-used": ["React", "Nextjs", "Appwrite", "typescript"],
    Backstory:
      "This was my first fullstack application that i created following a tutorial from youtube, it uses appwrite for backend to store todos and uses 3 themes, light, dark and purple",
  },
  "Stack-overflow Clone": {
    "project-duration": "4 week",
    "project-description":
      "A realtime web app that stores answers, questions, upvotes, downvotes and crud operations on users just like real stackoverflow",
    "meta-tags": [
      "frontend development",
      "backend development",
      "full-stack development",
    ],
    "technologies-used": [
      "React",
      "Nextjs",
      "Appwrite",
      "typescript",
      "Zustand",
    ],
    Backstory:
      "This was a guided project from youtube tutorial by Hitesh Chadhary. It helped me build full stack foundations and helped me navigate through appwrite",
  },
  "Rose-Day Card Generator": {
    "project-duration": "1 day",
    "project-description":
      "This app takes in your name, one of the colors of roses and creates a card with it with that name on it and you can download that card and share it with your loved ones",
    "meta-tags": ["frontend development", "AI"],
    "technologies-used": ["React", "Nextjs", "GeminiAPI"],
    "active-links": "https://rose-card.vercel.app/",
    Backstory:
      "I created this project in valentine's day because I am a lonely soul and no one wanted to be my valentine. Well this allowed me to escape that truth by getting myself to code for hours on end.",
  },
  "Prompt Gallery": {
    "project-duration": "1 day",
    "project-description":
      "A gallery that helps in creating storing different prompts for different models",
    "meta-tags": ["frontend development"],
    "technologies-used": ["React", "Vite"],
    "active-links": "https://prompt-archive.vercel.app/",
    Backstory:
      "Created this app for myself because i wanted a centralised way to save and get all my prompts on both mobile and pc. Again didnt want to incur any additional server costs therefore, i created a system that saves all my custom prompts in a json file. The are also some custom hardcoded prompts inside the website itself",
  },
  "Pollutants Checker": {
    "project-duration": "1 week",
    "project-description":
      "Created a full stack website that used deep learning (feed forward neural networks) to predict and mark vehicles whether they are green flag or a red flag based on there pm2.5, COx, NOx emmissions",
    "meta-tags": [
      "frontend development",
      "Machine Learning",
      "backend development",
      "full-stack development",
    ],
    "technologies-used": [
      "React",
      "Nextjs",
      "Flask",
      "IPYNB",
      "scikit-learn",
      "tensorflow",
      "matplotlib",
      "pandas",
      "typescript",
      "python",
    ],
    Backstory:
      "This was a full stack app created in a hackathon where i had to code and train the model with the full stack app itself in one day while also attending college",
  },
  "Epub Reader": {
    "project-duration": "1 day",
    "project-description":
      "created a nextjs app that helps in reading epub books and files in dark and light mode as well as a intuitive and friendly user interface",
    "meta-tags": ["frontend development"],
    "technologies-used": ["React", "Nextjs", "typescript"],
    "active-links": "https://epub-reader-delta.vercel.app/",
    Backstory:
      "Created a nextjs app for my little sister that helps in reading books because she wasnt able to read all the epub files that were available online because she is a nerd. Also added a light and dark mode in this app to help in reading. App follows neo-minimalistic design approach with subtle dropshadows and colors like pink and blue acc to her taste",
  },
};
