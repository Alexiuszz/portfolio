import { motion } from "framer-motion";
import styled from "styled-components";
import { fadeIn, fadeOut, morphCircle, scaleUp } from "../../styles/keyframes";
import { absCenter } from "@/styles/style_mixins";

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
  &.hamburger {
    .cursor-background {
      animation: ${fadeOut} 1s cubic-bezier(0.77, 0, 0.175, 1) 0s
        forwards;
    }

    .main-cursor-background {
      animation: ${scaleUp} 1s cubic-bezier(0.77, 0, 0.175, 1) 0s
        forwards;
    }
  }
  &.link {
    .cursor-background {
      animation: ${fadeOut} 1s cubic-bezier(0.77, 0, 0.175, 1) 0s
        forwards;
    }

    .main-cursor-background {
      animation: ${morphCircle} .5s cubic-bezier(0.77, 0, 0.175, 1) 0s
        forwards;
    }
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
    background: ${({ theme }) => theme.cursorColor};
    border-radius: 50%;
    &::after {
      background: ${({ theme }) => theme.cursorGlow};
      opacity: 0.1;
      content: "";
      height: 1000px;
      width: 1000px;
      display: inline-block;
      border-radius: 50%;
      ${absCenter}
    }
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
    border: 0.5px solid #a2a2a2;
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
