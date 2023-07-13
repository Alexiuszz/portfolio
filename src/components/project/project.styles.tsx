import { absCenter } from "@/styles/style_mixins";
import { mobile } from "@/styles/style_variables";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 300px;
  ${absCenter};
  position: relative;
  .imgContainer {
    width: 60%;
    aspect-ratio: 2/1;
    min-width: 600px;
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
        height: 105%;
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
    aspect-ratio: 2/1;
    .projectLink {
      color: ${({ theme }) => theme.primaryFontColor};
      margin-top: 5px;
      margin-left: 10%;
      transition: all.4s;
      svg {
        height: 20px;
        &:hover {
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
    top: 50%;
    left: 75%;
    transform: translate(-50%, 50%);
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

  @media screen and (max-width: ${mobile}) {
    width: 95%;
    aspect-ratio: 2/1;
    min-height: 100px;
    &:hover {
      .textWindow {
        height: 100%;
        font-size: 14px;
        padding: 20px;
        .techList {
          font-size: 12px;
        }
      }
    }
    .textWindow {
      top: 100%;
      transform: translate(-50%, -100%);
      left: 50%;
      height: 0;
      padding: 0;
      width: 100%;
      border-radius: 10px;
      border: none;
      font-size: 0;
      transition: all 0.3s;
      .techList {
        font-size: 0;
        position: absolute;
        top: 100%;
      }
      .proj-descr {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
      }
    }
    .projectWrapper {
      position: relative;
      .imgContainer {
        width: 100%;
        min-width: 60px;
        &::after {
          content: "";
          width: 0%;
          height: 0%;
        }
      }
      .projectLink {
        color: ${({ theme }) => theme.primaryFontColor};
        position: absolute;
        top: 5%;
        right: 5%;
        transition: all.4s;
        z-index: 2;
        svg {
          height: 20px;
        }
      }.gitLink{
        top: 25%;
      }
      &:hover {
        svg {
          height: 26px;
          color: ${({ theme }) => theme.hoverFontColor};
        }
      }
    }
  }
  @media screen and (max-width: 520px) {
    .textWindow {
      top: 100%;
    }
  }
`;
