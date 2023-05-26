import { absCenter, centerContent } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const LandingContainer = styled(motion.main)`
  position: relative;
  min-height: 100vh;
  /* background: radial-gradient(circle at 50%, #333, #fff 50%); */
  /* color: #d6dbdc */
  scroll-snap-align: center;
`;

export const HeroContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  ${absCenter};
  transform: translate(-50%, -40%);
  top: 45%;
  opacity: 0;
`;

export const AboutSectionContainer = styled(motion.div)`
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
