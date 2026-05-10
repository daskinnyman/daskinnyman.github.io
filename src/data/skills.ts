export type SkillCategory = {
  name: string;
  accentColor: "blue" | "pink" | "red";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    accentColor: "blue",
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Java Spring Boot",
      "ASP.NET Core",
    ],
  },
  {
    name: "Data & Security",
    accentColor: "pink",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Caching",
      "Rate Limiting",
      "Prisma",
      "KYC / AML Integration",
      "OAuth2",
      "JWT",
      "RBAC",
      "OWASP Security",
    ],
  },
  {
    name: "Ops & AI",
    accentColor: "red",
    skills: [
      "AWS",
      "CloudWatch",
      "Sentry",
      "Kibana",
      "Docker",
      "EC2",
      "Lambda",
      "S3",
      "LangChain",
      "AWS Bedrock",
      "RAG",
      "FAISS",
      "Prompt Engineering",
    ],
  },
];
