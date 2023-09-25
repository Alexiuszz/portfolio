import { absCenter } from "@/styles/style_mixins";
import { mobile } from "@/styles/style_variables";
import { motion } from "framer-motion";
import styled from "styled-components";

export const GliderContainer = styled(motion.div)`
  ${absCenter};
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
      margin-right: 15px;
      img {
        height: 40px;
        width: 40px;
        object-fit: cover;
      }
      img:last-of-type {
        padding-left: 0;
      }
    }
  }
  @media screen and (max-width: ${mobile}){
    width: 100vw;
    margin-left: 5%;
  }
`;
