"use client";

import {
  SiDocker,
  SiGit,
  SiGo,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "./ui/title";
import { SkillsCards } from "./ui/skills-cards";

const skills = [
  {
    text: "Next.js",
    icon: SiNextdotjs,
  },
  {
    text: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    text: "React.js",
    icon: SiReact,
  },
  {
    text: "Node.js",
    icon: SiNodedotjs,
  },
  {
    text: "Docker",
    icon: SiDocker,
  },
  {
    text: "Git",
    icon: SiGit,
  },
  {
    text: "Prisma",
    icon: SiPrisma,
  },
  {
    text: "MySQl",
    icon: SiMysql,
  },
  {
    text: "MongoDB",
    icon: SiMongodb,
  },
  {
    text: "TypeScript",
    icon: SiTypescript,
  },
  {
    text: "Python",
    icon: SiPython,
  },
  {
    text: "GoLang",
    icon: SiGo,
  },
];

export default function Skills() {
  return (
    <div className="w-full flex flex-col md:py-24 py-16">
      <Title text="Skills ⚡" />
      <SkillsCards items={skills} />
    </div>
  );
}
