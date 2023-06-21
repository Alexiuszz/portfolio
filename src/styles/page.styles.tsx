import { absCenter, centerContent } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";
import Project from "../components/project/index";

export const LandingContainer = styled(motion.section)`
  height: 100vh;
  scroll-snap-align: start;
  .heroContent {
    position: relative;
    height: 100%;
  }
`;

export const HeroContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  ${absCenter};
  position: relative;
  transform: translate(-50%, -40%);
  top: 30%;
  opacity: 1;
  .typewriter {
    font-size: 20px;
    position: absolute;
    transform: translate(0%, -200%);
    top: -120%;
    left: 0;
    color: ${({ theme }) => theme.hoverFontColor};
  }
  .heroAbout {
    position: absolute;
    top: -250%;
    left: 0;
    width: 70%;
    .heroMe,
    .heroText {
      color: ${({ theme }) => theme.secondaryFontColor};
    }
    .heroName {
      color: ${({ theme }) => theme.primaryFontColor};
    }
    .heroText {
      margin-top: 20px;
      p {
        font-size: 16px;
      }
    }
  }
`;

export const AboutSectionContainer = styled(motion.section)`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  ${centerContent};
  filter: drop-shadow(5px 5px 25px black);
  .about-content {
    display: flex;
    position: relative;
    top: 25px;
    background: ${({ theme }) => theme.tetiaryColor};
    background-size: 1000px;
    border: 5px solid ${({ theme }) => theme.hoverFontColor};
    background-position: center right;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 15px 15px 25px 15px;
    filter: brightness(0.95) sepia(30%) saturate(80%);
    border-radius: 30px;
    height: 70%;
    clip-path: polygon(
      0% 0%,
      0% 93%,
      5% 98%,
      6% 99%,
      8% 95%,
      12% 94%,
      15% 97%,
      17% 93%,
      20% 98%,
      22% 97%,
      25% 99%,
      31% 94%,
      35% 93%,
      39% 96%,
      43% 93%,
      45% 94%,
      47% 95%,
      50% 92%,
      52% 96%,
      54% 93%,
      58% 92%,
      60% 95%,
      62% 93%,
      65% 96%,
      69% 93%,
      72% 93%,
      75% 94%,
      79% 97%,
      81% 94%,
      85% 93%,
      88% 92%,
      90% 95%,
      93% 93%,
      95% 92%,
      97% 95%,
      100% 97%,
      100% 0%
    );
    overflow: auto;
  }
  .about-img {
    position: relative;
    height: 60%;
    aspect-ratio: 1/1;
    overflow: hidden;
    background: #ffffff10;
    border-radius: 20px;
    margin-left: 5%;
    border-radius: ${({ theme }) => theme.hoverFontColor};
    ${centerContent};
    .splash {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: -50%;
      clip-path: path(
        "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
      );
      background: linear-gradient(
        306deg,
        rgb(85, 255, 0),
        rgb(0, 255, 85)
      );
    }
    .aboutImgWrapper {
      height: 85%;
      width: 85%;
      display: block;
      position: relative;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.hoverFontColor};
      transform: rotate(-8deg);
      overflow: hidden;
      box-shadow: 0 10px 30px -15px #1e1d1d;
      transition: all 0.3s;
      .subWrapper {
        position: relative;
        border-radius: 20px;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        transition: all 0.3s;
      }
      &:hover ~ .splash {
        top: -10%;
      }
      &:hover {
        background-color: #fff;
        transform: rotate(0deg) !important;
        .subWrapper {
          mix-blend-mode: normal;
          filter: grayscale(0%) contrast(1);
          .about-img-container {
            width: 100%;
          }
          .about-img-container img {
            transform: rotate(3deg) !important;
          }
        }
      }
    }
    .about-img-container {
      height: 100%;
      width: 95%;
      ${centerContent};
    }
    img {
      height: 100%;
      transform: rotate(8deg);
      transition: all 0.3s;
    }
  }
  .about-text {
    margin: 0;
    width: 60%;
    height: 80%;
    font-size: 16px;
    .bigLetter {
      font-family: "Sassy Frass", cursive;
      font-size: 600%;
      font-weight: 1;
      opacity: 0.8;
      line-height: 0;
      color: ${({ theme }) => theme.primaryFontColor};
    }
    .about-button {
      position: relative;
      bottom: -15%;
      left: 61%;
      color: ${({ theme }) => theme.hoverFontColor};
    }
    .home-about-link {
      display: inline-block;
      color: ${({ theme }) => theme.hoverFontColor};
      -webkit-text-fill-color: ${({ theme }) => theme.hoverFontColor};
    }
  }
`;

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

export const ProjectsSection = styled(motion.section)`
  width: 100%;
  height: fit-content;
  scroll-snap-align: start;
  flex-direction: column;
  position: relative;
  h2 {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  .projects {
    height: fit-content;
    width: 100%;
    div:first-of-type {
      div {
        margin-top: 20px;
      }
    }
    .projectContainer {
      height: 100vh;
      width: 100%;
      position: relative;
    }
  }
`;
