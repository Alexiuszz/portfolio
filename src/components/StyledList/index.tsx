import { motion } from "framer-motion";
import styled from "styled-components";

export default styled(motion.li)`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  &::before {
    content: "⁘";
    position: absolute;
    left: 0px;
    color: ${({ theme }) => theme.hoverFontColor};
  }
`;
