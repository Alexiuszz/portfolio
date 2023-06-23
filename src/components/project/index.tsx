import React, { useEffect, useState } from "react";
import { ProjectContainer } from "./project.styles";
import { ProjectType } from "@/sections/Home/projects";
import { animate, motion } from "framer-motion";
import CustomLink from "@/components/CustomLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Project({ project }: { project: ProjectType }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (loaded) {
      animate(
        ".project-container",
        {
          opacity: 1,
        },
        {
          duration: 0.5,
        }
      );
    }
  }, [loaded]);

  return (
    <ProjectContainer className="project-container">
      <h2>{project.name}</h2>
      <figure className="projectWrapper">
        <CustomLink blank className="imgContainer" href={project.url}>
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.img}
            alt={project.name}
            onLoad={() => setLoaded(true)}
          />
        </CustomLink>
        <CustomLink blank className="projectLink" href={project.url}>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{" "}
        </CustomLink>
      </figure>
      <motion.div className="textWindow">
        <motion.p>{project.desc}</motion.p>
        <motion.p className="techList">
          {project.tech.join(" ")}
        </motion.p>
      </motion.div>
    </ProjectContainer>
  );
}

export default Project;
