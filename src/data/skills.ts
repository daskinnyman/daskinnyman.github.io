export type SkillCategory = {
  name: string;
  accentColor: "blue" | "pink" | "red";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    accentColor: "blue",
    skills: [
      "React",
      "Next.js",
      "Remix.js",
      "Vue",
      "Angular",
      "TypeScript",
      "React Native",
      "Flutter",
      "Module Federation",
    ],
  },
  {
    name: "Backend",
    accentColor: "pink",
    skills: [
      "Nest.js",
      "Express",
      "FastAPI",
      "Spring Boot",
      "ASP.NET Core",
      "GraphQL",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "TypeORM",
      "Prisma",
    ],
  },
  {
    name: "Cloud & AI",
    accentColor: "red",
    skills: [
      "AWS",
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "LangChain",
      "FAISS",
      "AWS Bedrock",
      "LangSmith",
      "Jest",
      "Playwright",
      "Zod",
    ],
  },
];
