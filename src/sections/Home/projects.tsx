import Project from "@/components/project";
import { ProjectsSection } from "@/styles/page.styles";
import { SectionHeader } from "@/styles/typography.styles";
import React from "react";

export interface ProjectType {
  project: string;
  id: string;
  desc: string;
  url: string;
  img: string;
  tech: string[];
}

const myProjects: ProjectType[] = [
  {
    project: "Biamuta",
    id: "biamuta",
    desc: "Africa's first one stop shop for basic education. Enter a world of interactive learning with Biamuta! From English and Mathematics to Science and Social studies, fun games, exercises and much more, you are in for an exciting ride on BiaMuta. BiaMuta is light on your data and you can access it from any device.",
    url: "https://biamuta.com/",
    img: "https://s3.amazonaws.com/alexius.dev/projectImgs/BiamutaHomepng.png",
    tech: ["React", "Redux", "Firebase", "Rive", "Styled-Components"],
  },
  {
    project: "Alexius.dev",
    id: "portfolio",
    desc: "My personal website",
    url: "",
    img: "https://s3.amazonaws.com/alexius.dev/projectImgs/Portfolio.png",
    tech: ["Next.js", "Framer-motion", "Styled Components"],
  },
  {
    project: "Emissar",
    id: "emissar",
    desc: "Courier hailing web app, for finding courier services around you!",
    url: "https://emissar.netlify.com/",
    img: "https://s3.amazonaws.com/alexius.dev/projectImgs/EmissarHomepng.png",
    tech: [
      "React",
      "Redux",
      "Express.js",
      "MongoDb",
      "Google maps API",
    ],
  },
  {
    project: "BrainTrainer",
    id: "bt",
    desc: "Highly addictive web app for training your cognitive ability, with many game modes involving memory retention, arithmetic and logical reasoning.",
    url: "http://brain-trainer-web.s3-website-us-west-2.amazonaws.com/",
    img: "https://s3.amazonaws.com/alexius.dev/projectImgs/BrainTrainerHome.png",
    tech: ["React", "Redux"],
  },
  {
    project: "Oda Now",
    id: "oda",
    desc: "An order management system, for tracking orders, keeping track of inventory, invoicing and customer managment.",
    url: "https://odanow.net/#/",
    img: "https://s3.amazonaws.com/alexius.dev/projectImgs/OdaNow.png",
    tech: ["React", "Asp.net", "Sql", "Redux"],
  },
];
function Projects() {
  return (
    <ProjectsSection id="projects">
      <SectionHeader>My Notable Projects</SectionHeader>
      <div className="projects">
        {myProjects.map((project, i) => {
          return (
            <div key={i} className="projectContainer">
              <Project  project={project} />
            </div>
          );
        })}
      </div>
    </ProjectsSection>
  );
}

export default Projects;
