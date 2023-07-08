import { mobile } from "@/styles/style_variables";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectsSection = styled(motion.section)`
  width: 100%;
  height: fit-content;
  scroll-snap-align: start;
  flex-direction: column;
  position: relative;
  padding-top: 35px;
  h2 {
    position: absolute;
    top: 4%;
    left: 0;
  }
  .projects {
    height: fit-content;
    width: 100%;
    div:first-of-type.projectContainer {
      margin-top: 40px;
    }
    .projectContainer {
      height: 100vh;
      width: 100%;
      position: relative;
    }
  }

  @media screen and (max-width: ${mobile}) {
    padding-top: 140px;
    h2 {
      font-size: 25px;
      top: 8.5%;
    }
    .projects {
      .projectContainer {
        height: 30vh;
      }
    }
  }
`;
