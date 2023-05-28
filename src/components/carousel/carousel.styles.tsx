import { absCenter } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const GliderContainer = styled(motion.div)`
  ${absCenter};
  opacity: 0;
  transform: translate(-50%, -40%);
  top: 75%;
  overflow-x: hidden;
  overflow-y: visible;
  width: 75%;

  .glider-wrapper {
    display: flex;
    height: 10rem;
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
        align-items: center;
}
`;
