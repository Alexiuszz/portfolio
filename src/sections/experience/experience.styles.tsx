import { centerContent } from "@/styles/style_mixins";
import { mobile } from "@/styles/style_variables";
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
  h2 {
    margin-bottom: 30px;
  }
  .workHistoryContainer {
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 90%;
    height: 60%;
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
    bottom: 8%;
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

  @media screen and (max-width: ${mobile}) {
    .workHistoryContainer {
      height: 60%;
      width: 95%;
    }
    .workTabs {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -60%);
      width: 312px;
      display: flex;
      justify-content: space-between;
      padding: 0;
      border-bottom: 4px solid
        ${({ theme }) => theme.primaryFontColor};
      li {
        padding: 5px 5px;
        border-left: none;
        height: 25px;
        width: 110px;
        font-size: 14px;
        text-align:center;
      }
      .hLight {
        top: 84%;
        left: 0px;
        height: 8px;
        width: 100px;;
        clip-path: polygon(
          0 50%,
          40% 50%,
          50% 0,
          60% 50%,
          100% 50%,
          100% 100%,
          0 100%
        );
      }
    }
    .skillsContainer {
      width: 100%;
      height: 25%;
      .skills {
        grid-template-columns: repeat(2, minmax(140px, 200px));
      }
    }
  }
`;
