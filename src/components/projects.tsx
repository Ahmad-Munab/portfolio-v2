import React from "react";
import Title from "./ui/title";
import ProjectsCards from "./ui/projects-cards";
import {
  SiDocker,
  SiExpress,
  SiFramer,
  SiGo,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const Projects = () => {
  const myProjects = [
    {
      title: "Nano Link",
      url: "https://nano-link.vercel.app",
      image: "/project-images/nano-link.png",
      tech: [SiNextdotjs, SiTailwindcss, SiPostgresql],
    },
    {
      title: "E-Book Archive",
      url: "https://ebook-archive.vercel.app",
      image: "/project-images/ebook-archive.png",
      tech: [SiNextdotjs, SiTailwindcss, SiFramer],
    },
    {
      title: "Munab AI",
      url: "https://munab-ai.vercel.app",
      image: "/project-images/munab-ai.png",
      tech: [SiNextdotjs, SiTailwindcss, SiOpenai],
    },

    {
      title: "Munab Portfolio-v1",
      url: "https://munab-v1.vercel.app",
      image: "/project-images/portfolio-v1.png",
      tech: [SiNextdotjs, SiTailwindcss, SiFramer],
    },
    {
      title: "Munab Portfolio-v2",
      url: "https://munab.vercel.app",
      image: "/project-images/portfolio-v2.png",
      tech: [SiNextdotjs, SiTailwindcss, SiFramer],
    },

    {
      title: "Musesoft",
      url: "https://muse-jsiqbal.vercel.app",
      image: "/project-images/musesoft.png",
      tech: [SiNextdotjs, SiTailwindcss, SiMysql, SiDocker, SiGo],
    },
  ];

  return (
    <div className="flex flex-col w-full md:py-24 py-16">
      <Title text="Projects ✨" />
      <ProjectsCards projects={myProjects} />
    </div>
  );
};

export default Projects;
