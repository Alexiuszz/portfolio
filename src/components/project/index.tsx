import React, { useEffect, useState } from "react";
import { ProjectContainer } from "./project.styles";
import { ProjectType } from "@/sections/projects/projects";
import { animate, motion } from "framer-motion";
import CustomLink from "@/components/CustomLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useIsMedium } from "@/hooks/useMediaQuery";

function Project({ project }: { project: ProjectType }) {
  const isMedium = useIsMedium();

  return (
    <ProjectContainer className="project-container">
      <h2>{project.name}</h2>
      <figure className="projectWrapper">
        <CustomLink
          blank={isMedium}
          className="imgContainer"
          href={isMedium ? project.url : "#"}          
        >
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.img} alt={project.name} />
        </CustomLink>
        <CustomLink blank className="projectLink" href={project.url}>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{" "}
        </CustomLink>
        <motion.div className="textWindow">
          <motion.p>{project.desc}</motion.p>
          <motion.p className="techList">
            {project.tech.join(" ")}
          </motion.p>
        </motion.div>
      </figure>
    </ProjectContainer>
  );
}

export default Project;
