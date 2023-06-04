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
  height: 11rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  .glider-wrapper {
    display: flex;
    height: 10rem;
    .image {
      margin-right: 30px;
      img {
        max-width: 150px;
        height: 5rem;
        padding: 0 15px;
        object-fit: cover;
      }
      img:last-of-type {
        padding-left: 0;
      }
    }
  }
`;
