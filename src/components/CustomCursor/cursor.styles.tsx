import { motion } from "framer-motion";
import styled from "styled-components";

export const CursorWrapper = styled.div`
position: fixed;
  & > div {
    pointer-events: none;
    transform: translate3d(0, 0, 0);
    position: fixed;
    position: absolute;
    border-radius: 50%;
    z-index: 10;
  }
`;
export const MainCursor = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: black;
  z-index: 10;
`;
export const SecondCursor = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  border: 1px solid black;
`;
