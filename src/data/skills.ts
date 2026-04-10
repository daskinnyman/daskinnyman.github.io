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
      "React Native",
      "TypeScript",
      "Next.js",
      "Angular",
      "Vue",
      "Ionic",
    ],
  },
  {
    name: "Backend",
    accentColor: "pink",
    skills: ["Nest.js", "Node.js", ".NET Core", "MongoDB"],
  },
  {
    name: "Cloud & Tools",
    accentColor: "red",
    skills: ["Azure", "Firebase", "Figma", "Cloud Functions"],
  },
];
