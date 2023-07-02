import { absCenter } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";


export const LandingContainer = styled(motion.section)`
  height: 100vh;
  scroll-snap-align: start;
  .heroContent {
    position: relative;
    height: 100%;
  }
`;

export const HeroContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  ${absCenter};
  position: relative;
  transform: translate(-50%, -40%);
  top: 30%;
  opacity: 1;
  .typewriter {
    font-size: 20px;
    position: absolute;
    transform: translate(0%, -200%);
    top: -120%;
    left: 0;
    color: ${({ theme }) => theme.hoverFontColor};
  }
  .heroAbout {
    position: absolute;
    top: -250%;
    left: 0;
    width: 70%;
    .heroMe,
    .heroText {
      color: ${({ theme }) => theme.secondaryFontColor};
    }
    .heroName {
      color: ${({ theme }) => theme.primaryFontColor};
    }
    .heroText {
      margin-top: 20px;
      p {
        font-size: 16px;
      }
    }
  }
`;
