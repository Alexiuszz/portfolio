import { motion } from "framer-motion";
import styled from "styled-components";
import { fadeIn, fadeOut } from "../../styles/keyframes";

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
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
  animation: ${fadeIn} 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  mix-blend-mode: difference;
  z-index: 10;
  .main-cursor-background {
    width: 10px;
    height: 10px;
    background: #0039aa;
    border-radius: 50%;
  }
`;
export const SecondCursor = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  /* border: 1px solid black; */
  .cursor-background {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: .5px solid #a2a2a2;
    position: relative;
    &:after,
    &:before {
      content: "";
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: white;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      animation: ${fadeOut} 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s
        forwards;
    }
    &:before {
      left: 10px;
    }

    &:after {
      right: 10px;
    }
  }
`;
