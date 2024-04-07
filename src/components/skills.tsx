"use client";

import {
  SiDocker,
  SiGit,
  SiGo,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./ui/title";
import { AnimatedCards } from "./ui/animated-card";

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
    text: "GoLang",
    icon: SiGo,
  },
];

export default function Skills() {
  return (
    <div className="md:w-8/12 w-10/12 flex flex-col md:py-24 py-16">
      <Title
        text="Skills 💪"
        className="flex flex-col items-center justify-center mb-5"
      />
      <AnimatedCards items={skills} />
    </div>
  );
}
