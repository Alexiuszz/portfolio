import { absCenter } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const LandingContainer = styled(motion.main)`
  position: relative;
  min-height: 100vh;
  /* background: radial-gradient(circle at 50%, #333, #fff 50%); */
  /* color: #d6dbdc */
`;

export const Hero = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  ${absCenter};
  transform: translate(-50%, -40%);
  top: 45%;
  opacity: 0;
`;

export const Description = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-mono);
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  p {
    position: relative;
    margin: 0;
    padding: 1rem;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    border-radius: var(--border-radius);
  }
  code {
    font-weight: 700;
    font-family: var(--font-mono);
  }
`;
