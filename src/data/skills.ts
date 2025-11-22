// Define a reusable Skill type
export type Skill = {
  name: string;
  level: "Basic" | "Intermediate" | "Advanced" | "Expert";
  icon?: string;
};

// Grouped skill categories
export type SkillsData = {
  programmingLanguages: Skill[];
  frameworksLibraries: Skill[];
  databasesApis: Skill[];
  toolsPlatforms: Skill[];
  otherSkills: Skill[];
};

// Exported skills data
export const skillsData: SkillsData = {
  programmingLanguages: [
    { name: "PHP", level: "Advanced", icon: "devicon:php" },
    { name: "JavaScript", level: "Advanced", icon: "devicon:javascript" },
    { name: "Python", level: "Advanced", icon: "devicon:python" },
    { name: "C#", level: "Expert", icon: "devicon:csharp" },
    { name: "HTML", level: "Expert", icon: "devicon:html5" },
    { name: "CSS", level: "Expert", icon: "devicon:css3" },
  ],

  frameworksLibraries: [
    { name: "Laravel", level: "Advanced", icon: "devicon:laravel" },
    { name: ".NET", level: "Expert", icon: "devicon:dotnetcore" },
    { name: "React", level: "Intermediate", icon: "devicon:react" },
    { name: "Vue.js", level: "Intermediate", icon: "devicon:vuejs" },
    { name: "Bootstrap", level: "Advanced", icon: "devicon:bootstrap" },
    { name: "Tailwind CSS", level: "Advanced", icon: "devicon:tailwindcss" },
  ],

  databasesApis: [
    { name: "MySQL", level: "Advanced", icon: "devicon:mysql" },
    { name: "MongoDB", level: "Intermediate", icon: "devicon:mongodb" },
    { name: "PostgreSQL", level: "Intermediate", icon: "devicon:postgresql" },
    { name: "REST API", level: "Advanced", icon: "simple-icons:fastapi" },
    { name: "GraphQL", level: "Basic", icon: "devicon:graphql" },
  ],

  toolsPlatforms: [
    { name: "Git", level: "Advanced", icon: "devicon:git" },
    { name: "GitHub", level: "Advanced", icon: "devicon:github" },
    { name: "VS Code", level: "Advanced", icon: "devicon:vscode" },
    { name: "Postman", level: "Intermediate", icon: "simple-icons:postman" },
    { name: "Docker", level: "Intermediate", icon: "devicon:docker" },
    { name: "Figma", level: "Intermediate", icon: "devicon:figma" },
  ],

  otherSkills: [
    { name: "UI/UX Design", level: "Intermediate" },
    { name: "Data Analysis", level: "Intermediate" },
    { name: "Artificial Intelligence", level: "Basic" },
  ],
};
