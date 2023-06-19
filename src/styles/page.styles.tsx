import { absCenter, centerContent } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const LandingContainer = styled(motion.section)`
  height: 100vh;
  scroll-snap-align: center;
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
    .heroText {
      margin-top: 20px;
    }
  }
`;

export const AboutSectionContainer = styled(motion.section)`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
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
    width: 90%;
    padding: 15px 10px 25px 15px;
    filter: brightness(0.95) sepia(30%) saturate(80%);
    border-radius: 30px;
    height: 64%;
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
    height: 80%;
    width: 380px;
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
      top: -28%;
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
      height: 70%;
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
          .about-img-container img {
            transform: rotate(3deg) !important;
          }
        }
      }
    }
    .about-img-container {
      height: 100%;
      width: 100%;
      ${centerContent};
    }
    img {
      height: 150%;
      transform: rotate(8deg);
      transition: all 0.3s;
    }
  }
  .about-text {
    position: relative;
    margin: 0;
    padding: 10px;
    width: 55%;
    .bigLetter {
      font-family: "Sassy Frass", cursive;
      font-size: 600%;
      font-weight: 1;
      opacity: 0.8;
      line-height: 0;
    }
    p {
      line-height: 1.8;
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
  scroll-snap-align: center;
  ${centerContent};
  flex-direction: column;
`;
