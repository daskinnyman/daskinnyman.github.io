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
      "Spearheaded migration of 150+ core APIs to a structured Node.js / Nest.js architecture, delivering a 33% performance boost while supporting 400% DAU growth. Established production monitoring with AWS CloudWatch and Sentry, designed a BFF layer and GraphQL APIs, optimized PostgreSQL schemas, and engineered FastAPI / LangChain RAG pipelines while mentoring junior engineers.",
    current: true,
  },
  {
    period: "Jul 2022 — Feb 2024",
    role: "Full-Stack Engineer",
    company: "Trend Micro",
    description:
      "Introduced RabbitMQ with Dead Letter Queue handling to offload asynchronous tasks and improve API response times by 120%. Developed a JWT / OAuth2 Token Exchange Service in Node.js and Java to bridge modern services with legacy systems, and led Module Federation work to integrate legacy and modern React applications.",
  },
  {
    period: "Apr 2021 — Jun 2022",
    role: "Software Engineer",
    company: "XREX",
    description:
      "Translated complex AML regulations into scalable backend architectures. Integrated TRM Labs and handled KYC workflows for thousands of crypto exchange users, while ensuring 100% data consistency for high-concurrency financial transactions with Java Spring Boot, MySQL, and transaction isolation controls.",
  },
  {
    period: "Apr 2020 — Apr 2021",
    role: "Software Engineer",
    company: "HP",
    description:
      "Developed an ERP backend using ASP.NET Core and EF Core based on Clean Architecture. Designed a visual query builder for PC parts inventory so PMs could perform validated queries without writing SQL.",
  },
  {
    period: "Jul 2017 — Jul 2019",
    role: "R&D Intern",
    company: "Microsoft Corporation",
    description:
      "Independently developed an API Management Platform PoC using ASP.NET Core and Identity Server, which was adopted as a sales demonstration project.",
  },
];
