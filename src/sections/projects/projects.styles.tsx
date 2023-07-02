import { motion } from "framer-motion";
import styled from "styled-components";


export const ProjectsSection = styled(motion.section)`
  width: 100%;
  height: fit-content;
  scroll-snap-align: start;
  flex-direction: column;
  position: relative;
  h2 {
    position: absolute;
    top: 2%;
    left: 0;
  }
  .projects {
    height: fit-content;
    width: 100%;
    div:first-of-type {
      div {
        margin-top: 40px;
      }
    }
    .projectContainer {
      height: 100vh;
      width: 100%;
      position: relative;
    }
  }
`;
