import { centerContent } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";


export const ExperienceContainer = styled(motion.section)`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  ${centerContent};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  .workHistoryContainer {
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 90%;
    height: 400px;
  }
  .workTabs {
    font-size: 14px;
    position: relative;
    left: 75%;
    .hLight {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 10;
      height: 40px;
      width: 4px;
      background-color: ${({ theme }) => theme.hoverFontColor};
      clip-path: polygon(
        0% 0%,
        50% 0,
        50% 40%,
        100% 50%,
        50% 60%,
        50% 100%,
        0 100%
      );
    }
    li {
      margin: 0;
      padding: 10px 15px;
      border-left: 2px solid ${({ theme }) => theme.primaryFontColor};
      height: 40px;
      &::before {
        content: "";
      }
      &:hover {
        background-color: #ffffff2d;
      }
      p {
        transition: all 0.3s;
      }
      .currTab {
        color: ${({ theme }) => theme.hoverFontColor};
      }
    }
  }
  .skillsContainer {
    position: absolute;
    bottom: 5%;
    left: 0;
    .skills {
      display: grid;
      grid-template-columns: repeat(3, minmax(140px, 200px));
      gap: 0px 22px;
      padding: 0px;
      margin: 20px 0px 0px;
      overflow: hidden;
    }
  }
`;
