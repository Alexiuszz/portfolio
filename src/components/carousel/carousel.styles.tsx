import { absCenter } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const GliderContainer = styled(motion.div)`
  ${absCenter};
  transform: translate(-50%, -40%);
  top: 60%;
  overflow: hidden;
  .glider-wrapper {
    display: flex;
  }
  img {
    max-width: 150px;
    height: 5rem;
    padding: 0 15px;
    object-fit: cover;
  }

  img:last-of-type {
    padding-left: 0;
  }
  section {
    display: flex;
    /* animation: swipe var(--speed) linear infinite backwards; */
  }
`;
