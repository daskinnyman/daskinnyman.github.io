export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  description: string;
  current?: boolean;
};

// Placeholder entries — replace with real data
export const experience: ExperienceEntry[] = [
  {
    period: "2022 — Present",
    role: "Front-end Engineer",
    company: "XREX",
    description:
      "Building web interfaces and UI/UX for a digital asset platform.",
    current: true,
  },
  {
    period: "2020 — 2022",
    role: "Software Engineer",
    company: "Previous Company",
    description:
      "Full-stack development with React and Node.js on consumer products.",
  },
  {
    period: "2019 — 2020",
    role: "Junior Developer",
    company: "First Company",
    description:
      "Built mobile apps with React Native and delivered client projects.",
  },
];
