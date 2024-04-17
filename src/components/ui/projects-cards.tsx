"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { IconType } from "react-icons";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 1,
    },
  }),
};

const ProjectsCards = ({
  projects,
}: {
  projects: Array<{
    title: string;
    url: string;
    image: string;
    tech: Array<IconType>;
  }>;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-6 ">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          className="relative group h-max w-full  rounded-xl border-green-500 border-8 cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleClick(project.url)}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={idx}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={600}
            className="block opacity-100 group-hover:opacity-50 transition-all duration-300 group-hover:scale-110 w-full"
            style={{ transformOrigin: "top" }}
          />
          <motion.div className="absolute inset-0 flex flex-col gap-4 justify-end items-start opacity-0 group-hover:opacity-100 -left-8 group-hover:left-8 pb-8 text-white transition-all duration-300">
            <h1 className="md:text-4xl text-3xl font-bold">{project.title}</h1>
            <div className="flex gap-2">
              {project.tech.map((Icon, techIdx) => (
                <Icon
                  key={techIdx}
                  className="md:text-3xl text-2xl mr-2 transition-all duration-200 hover:scale-125"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsCards;
