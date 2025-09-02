import { centerContent } from "@/styles/style_mixins";
import { mobile } from "@/styles/style_variables";
import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutSectionContainer = styled(motion.section)`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  scroll-snap-align: start;
  ${centerContent};
  flex-direction: column;
  .about-content {
    display: flex;
    position: relative;
    overflow-x: hidden;
    top: 25px;
    background: ${({ theme }) => theme.tetiaryColor};
    background-size: 1000px;
    border: 5px solid ${({ theme }) => theme.hoverFontColor};
    background-position: center right;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 30px 15px 40px 15px;
    border-radius: 30px;
    min-height: 60vh;
    clip-path: polygon(
      0% 0%,
      0% 93%,
      22% 97%,
      25% 99%,
      31% 94%,
      35% 93%,
      39% 96%,
      43% 93%,
      45% 94%,
      47% 95%,
      97% 95%,
      100% 97%,
      100% 0%
    );
    overflow: auto;
  }
  .about-img {
    position: relative;
    width: 25%;
    min-width: 230px;
    aspect-ratio: 1/1;
    overflow: hidden;
    align-self: flex-start;
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
      background-color: ${({ theme }) => theme.cursorColor};
      transform: rotate(-8deg);
      overflow: hidden;
      box-shadow: 0 10px 30px -15px #1e1d1d;
      transition: all 0.3s;
      &:hover {
        background-color: #fff;
        transform: rotate(0deg) !important;
        .about-img-container {
          width: 100%;
        }
        .about-img-container img {
          transform: rotate(3deg) !important;
        }
      }
    }
    .about-img-container {
      height: 100%;
      width: 95%;
      ${centerContent};
    }
    img {
      align-self: flex-start;
      width: 100%;
      transform: rotate(8deg);
      transition: all 0.3s;
    }
  }
  .about-text {
    margin: 0;
    width: 60%;
    height: 80%;
    font-size: 14px;
    line-height: 1.5;

    article {
      max-height: 60vh;
      overflow-y: scroll;
      padding-top: 20px;
      p {
        margin: 0px 0px 15px;
      }
      .bigLetter {
        font-family: "Sassy Frass", cursive;
        font-size: 300%;
        font-weight: 1;
        opacity: 0.8;
        line-height: 0;
        color: ${({ theme }) => theme.primaryFontColor};
      }
    }
    .about-button {
      position: absolute;
      bottom: 10%;
      left: 70%;
      color: ${({ theme }) => theme.hoverFontColor};
    }
    .home-about-link {
      display: inline-block;
      color: ${({ theme }) => theme.hoverFontColor};
      -webkit-text-fill-color: ${({ theme }) => theme.hoverFontColor};
    }
  }

  @media screen and (max-width: ${mobile}) {
    .about-content {
      flex-direction: column;
      .about-text {
        width: 100%;
        article {
          padding-top: 20px;
          height: 45vh;
          overflow-y: scroll;
        }
      }
      .about-img {
        width: 15%;
        min-width: 150px;
        .splash {
          top: -118%;
        }
      }
    }
  }
`;
