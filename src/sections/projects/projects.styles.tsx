import { mobile } from "@/styles/style_variables";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectsSection = styled(motion.section)`
  width: 100%;
  height: fit-content;
  scroll-snap-align: start;
  flex-direction: column;
  position: relative;
  padding-top: 100px;
  padding-bottom: 50vh;
  .projects {
    height: fit-content;
    width: 100%;
    .projectContainer {
      height: 60vh;
      width: 100%;
      position: relative;
    }
  }

  @media screen and (max-width: ${mobile}) {
    h2 {
      font-size: 25px;
      margin-bottom: 10px;
    }
    .sectionHeader{      
      margin-bottom: 40px;
    }
    .projects {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 100px;
      /* div:last-of-type.projectContainer {
        margin-bottom: 200px;
      } */
      /* div:not(div:first-of-type.projectContainer) {
        margin-top: 160px;        
      } */
    }
  }
  @media screen and (max-width: 520px) {
     
    .projects {
      height: fit-content;
      .projectContainer{
        height: 40vh;
      }
    }
  }
`;
