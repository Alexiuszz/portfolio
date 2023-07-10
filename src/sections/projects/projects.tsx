import Project from "@/components/project";
import { ProjectsSection } from "@/sections/projects/projects.styles";
import { SectionHeader } from "@/styles/typography.styles";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export interface ProjectType {
  name: string;
  id: string;
  desc: string;
  url: string;
  img: string;
  tech: string[];
}

const myProjects: ProjectType[] = [
  {
    name: "Biamuta",
    id: "biamuta",
    desc: "Africa's first one stop shop for basic education. Enter a world of interactive learning with Biamuta! From English and Mathematics to Science and Social studies, fun games, exercises and much more, you are in for an exciting ride on Biamuta.",
    url: "https://biamuta.com/",
    img: "https://s3.amazonaws.com/alexius.dev/projectImgs/Biamuta.png",
    tech: ["React", "Redux", "Firebase", "Rive", "Styled-Components"],
  },
  {
    name: "Alexius.dev",
    id: "portfolio",
    desc: "My personal website",
    url: "",
    img: "https://s3.amazonaws.com/alexius.dev/projectImgs/alexius.png",
    tech: ["Next.js", "Framer-motion", "Styled-Components"],
  },
  {
    name: "Emissar",
    id: "emissar",
    desc: "Courier hailing web app, for finding courier services around you!",
    url: "https://emissar.netlify.com/",
    img: "https://s3.amazonaws.com/alexius.dev/projectImgs/emissar.png",
    tech: [
      "React",
      "Redux",
      "Express.js",
      "MongoDb",
      "Google-Maps-API",
    ],
  },
  {
    name: "BrainTrainer",
    id: "bt",
    desc: "Highly addictive web app for training your cognitive ability, with many game modes involving memory retention, arithmetic and logical reasoning.",
    url: "http://brain-trainer-web.s3-website-us-west-2.amazonaws.com/",
    img: "https://s3.amazonaws.com/alexius.dev/projectImgs/brain-trainer.png",
    tech: ["React", "Redux"],
  },
  {
    name: "Oda Now",
    id: "oda",
    desc: "An order management system, for tracking orders, keeping track of inventory, invoicing and customer managment.",
    url: "https://odanow.net/#/",
    img: "https://s3.amazonaws.com/alexius.dev/projectImgs/odanow.png",
    tech: ["React", "Asp.net", "Sql", "Redux"],
  },
];
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
