import Project from "@/components/project";
import { ProjectsSection } from "@/sections/projects/projects.styles";
import { SectionHeader } from "@/styles/typography.styles";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { myProjects } from "./myProjects";

export interface ProjectType {
  name: string;
  id: string;
  desc: string;
  url: string;
  img: string;
  tech: string[];
  git?: string;
}

function Projects({
  setSection,
}: {
  setSection: (section: string) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref,{amount: 0.2});
  useEffect(() => {
    isInView && setSection("projects");
  }, [isInView]);
  return (
    <ProjectsSection ref={ref} id="projects">
      <SectionHeader className="sectionHeader">
        Notable Projects
      </SectionHeader>
      <div className="projects">
        {myProjects.map((project, i) => {
          return (
            <div key={i} className="projectContainer">
              <Project project={project} />
            </div>
          );
        })}
      </div>
    </ProjectsSection>
  );
}

export default Projects;
