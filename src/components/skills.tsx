"use client";

import {
  SiFirebase,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";
import Title from "./ui/title";
import { AnimatedCards } from "./ui/animated-card";

const skills = [
  {
    text: "Node.js",
    icon: SiNodedotjs,
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
    text: "Next.js",
    icon: SiNextdotjs,
  },
  {
    text: "Vue.js",
    icon: SiVuedotjs,
  },
  {
    text: "Nuxt.js",
    icon: SiNuxtdotjs,
  },
  {
    text: "Supabase",
    icon: SiSupabase,
  },
  {
    text: "Firebase",
    icon: SiFirebase,
  },
  {
    text: "Prisma",
    icon: SiPrisma,
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
