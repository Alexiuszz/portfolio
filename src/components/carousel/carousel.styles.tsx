import { absCenter } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const GliderContainer = styled(motion.div)`
  ${absCenter};
  position: fixed;
  opacity: 0;
  transform: translate(-50%, -40%);
  top: 90%;
  overflow-x: hidden;
  overflow-y: visible;
  width: 80vw;
  height: 8rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  .glider-wrapper {
    display: flex;
    height: 6rem;
    .image {
      margin-right: 10px;
      img {
        max-width: 150px;
        height: 3rem;
        padding: 0 15px;
        object-fit: cover;
      }
      img:last-of-type {
        padding-left: 0;
      }
    }
  }
`;
