import styled from "styled-components";
import { motion } from "framer-motion";
import { absCenter, centerContent } from "../../styles/style_mixins";

export const NavContainer = styled(motion.div)`
  position: absolute;
  width: 50%;
  display: grid;
  ${absCenter};
  top: 45%;
  grid-template-columns: .5fr minmax(10px, 2fr) 3fr;
  padding: 0 10%;
  .unsplash {
    margin-left: 20%;
    display: flex;
    justify-content: space-between;
    grid-column:3/3;
  }
`;
