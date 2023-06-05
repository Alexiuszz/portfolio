import { absCenter, centerContent } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const LandingContainer = styled(motion.section)`
  height: 100vh;
  scroll-snap-align: center;
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
  opacity: 0;
  .typewriter {
    font-size: 20px;
    position: absolute;
    transform: translate(0%, -200%);
    top: -120%;
    left: 0;
  }
  .heroAbout {
    position: absolute;
    top: -250%;
    left: 0;
    width: 75%;
  }
`;

export const AboutSectionContainer = styled(motion.section)`
  max-width: var(--max-width);
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  ${centerContent};
  .about-content {
    width: 100%;
    height: 200px;
    display: flex;
    z-index: 2;
    justify-content: center;
  }
  .about-img {
    position: relative;
    width: 200px;
    overflow: hidden;
    background-color: #7e6e9e;
    transform: skewX(-15deg);
    img {
      transform: skewX(15deg);
    }
  }
  .about-text {
    position: relative;
    margin: 0;
    padding: 1rem;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    border-radius: var(--border-radius);
    width: 60%;
    height: 100%;
    transform: skewX(-15deg);
    p {
      line-height: 1.8;
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  code {
    font-weight: 700;
    font-family: var(--font-mono);
  }
`;
