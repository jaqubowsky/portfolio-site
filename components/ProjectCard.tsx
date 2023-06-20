"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";
import projectImage from "@assets/images/project.png";
import LinkComponent from "./LinkComponent";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    images: StaticImageData[];
    link: string;
    technologies: string[];
  };
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleIsHovered = () => setIsHovered(true);
  const handleIsNotHovered = () => setIsHovered(false);

  const { technologies, images, title, link, description } = project;

  const technologiesEl = technologies.map((technology) => (
    <span key={technology} className="mr-2 text-sm text-red-400">
      {technology}
    </span>
  ));

  return (
    <motion.div
      onMouseEnter={handleIsHovered}
      onMouseLeave={handleIsNotHovered}
      className="relative w-72 h-72 aspect-w-1 aspect-h-1 text-black group overflow-hidden text-center"
    >
      {/* {project card body} */}
      <AnimatePresence mode="sync">
        {isHovered && (
          <motion.div className="flex flex-col h-full justify-around p-4 bg-white absloute inset-0">
            <motion.div
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -500 }}
              transition={{ type: "spring", stiffness: 60, duration: 0.1 }}
            >
              <h3 className="text-lg">{title}</h3>
              {technologiesEl}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 500 }}
              transition={{ type: "spring", stiffness: 60, duration: 0.1 }}
            >
              <LinkComponent
                target="_blank"
                intent="projects"
                size="small"
                href={link}
              >
                Learn more
              </LinkComponent>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* {project card image} */}
      <AnimatePresence mode="sync">
        {!isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src={images.length > 0 ? images[0] : projectImage}
              alt={title}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
