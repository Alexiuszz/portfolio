import { absCenter } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectContainer = styled(motion.div)`
  width: 100%;
  height: 50%;
  min-height: 300px;
  ${absCenter};
  position: relative;
  h2 {
    top: -12%;
  }
  .imgContainer {
    width: 60%;
    aspect-ratio: 2/1;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    display: block;
    &:hover {
      &::after {
        width: 0;
        opacity: 0;
      }
      img {
        height: 110%;
      }
    }
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.hoverFontColor};
      opacity: 0.5;
      transition: all 0.3s;
      border-radius: 10px;
    }
    img {
      height: 100%;
      aspect-ratio: 2/1;
      border-radius: 10px;
      transition: all 0.3s;
    }
  }
  .projectWrapper {
    width: 100%;
    .projectLink {
      color: ${({ theme }) => theme.primaryFontColor};
      font-size: 20px;
      margin-top: 5px;
      margin-left: 10%;
      transition: all.4s;
      svg {
        height: 20px;
      }
      &:hover {
        svg {
        height: 26px;
        color: ${({ theme }) => theme.hoverFontColor};
 }
      }
    }
    &:hover {
      &::before {
        width: 0;
      }
    }
  }
  .textWindow {
    position: absolute;
    width: 50%;
    background-color: ${({ theme }) => theme.tetiaryColor};
    font-size: 14px;
    top: 75%;
    left: 75%;
    transform: translate(-50%, -50%);
    padding: 20px;
    padding-bottom: 5px;
    border: 2px solid ${({ theme }) => theme.primaryFontColor};
    color: ${({ theme }) => theme.primaryFontColor};
    border-radius: 20px;
    .techList {
      color: ${({ theme }) => theme.secondaryFontColor};
      word-spacing: 9px;
      font-size: 12px;
      margin: 10px auto 0 auto;
      width: fit-content;
    }
  }
`;
