export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  description: string;
  current?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    period: "Feb 2024 — Present",
    role: "Senior Software Engineer",
    company: "Mammoth Cyber",
    description:
      "Led migration of 150+ API endpoints from AWS Lambda to Nest.js (150% perf gain) and progressive Vue → Remix.js frontend migration. Designed microservices + BFF architecture, GraphQL API, multi-layer caching (Redis / CDN), and production observability (CloudWatch, Sentry). Architected AI browser automation system with multi-agent orchestration (LangChain / ReAct), FAISS RAG pipeline, CDP integration, and AWS Bedrock Guardrail.",
    current: true,
  },
  {
    period: "Jul 2022 — Feb 2024",
    role: "Full-Stack Engineer",
    company: "Trend Micro",
    description:
      "Developed telecom security product with SIM-card whitelist enforcement and SIM-swap detection. Built JWT/OAuth2 Token Exchange Service bridging modern auth with a legacy system. Led Module Federation micro-frontend integrating 3 independent apps. Introduced RabbitMQ async processing (fire-and-forget + DLQ), improving API response speed by 120%.",
  },
  {
    period: "Apr 2021 — Jun 2022",
    role: "Software Engineer",
    company: "Lianke Tech",
    description:
      "Built KYC and AML compliance features for a crypto exchange using Spring Boot + JPA. Integrated TRM Labs for regulatory compliance, supporting liveness detection and multi-country identity verification. Led Angular → Next.js migration enabling shared hooks with React Native.",
  },
  {
    period: "Apr 2020 — Apr 2021",
    role: "Software Engineer",
    company: "HP",
    description:
      "Built ERP system with ASP.NET Core + Clean Architecture for ~1,000 global users. Delivered a visual query builder letting PMs query inventory without SQL. Collaborated with AI engineers to ship an internal Help Desk chatbot (Azure Bot Framework + LUIS) used company-wide.",
  },
  {
    period: "Jul 2017 — Jul 2019",
    role: "R&D Administrative Assistant (Internship)",
    company: "Microsoft Taiwan",
    description:
      "Developed an API management platform PoC with ASP.NET Core MVC + Identity Server that was adopted as a sales demo. Participated in a microservices migration for Cathay Bank. Built mobile and web banking features for a Taiwanese bank using Angular.",
  },
];
