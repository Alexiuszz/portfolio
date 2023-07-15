import { centerContent } from "@/styles/style_mixins";
import { mobile } from "@/styles/style_variables";
import { motion } from "framer-motion";
import styled from "styled-components";

interface LayoutStyleProps {
  hideOverview?: boolean;
  inView?: boolean;
  scrollUp?: boolean;
}
export const MainLayout = styled.div<LayoutStyleProps>`
  overflow-y: scroll;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  max-width: 1600px;
    margin: 0px auto;
  .content {
    height: 100vh;
    width: ${(props) => (props.hideOverview ? "100%" : "75%")};
    margin: 0 auto;

    section {
      width: 100%;
    }
  }
  .content::-webkit-scrollbar {
    display: none;
  }
  &:hover .gradient1 {
    stop-color: #cf9116;
  }

  &:hover .gradient2 {
    stop-color: #0f8a5f;
  }
  @media screen and (max-width: ${mobile}) {
    overflow-x: hidden;
    .content {
      width: 90%;
      margin: 0 75px 0 13px;
      section {
        width: 93%;
      }
    }
    .socials {
      display: none;
    }
  }
`;

export const SplashScreen = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  position: fixed;
  ${centerContent}
  .logoSplash {
    height: 80px;
    width: 70px;
    .container {
      background: #0b3320;
      transform: rotate(-24.53deg);
      height: 80px;
      width: 70px;
      border-radius: 10px;
      ${centerContent};
      img {
        transform: rotate(24.53deg);
        height: 60px;
      }
      .svg-border {
        position: absolute;
      }
      .neon {
        filter: url(#neon);
      }
    }
  }
`;
interface MenuContainerProps {
  menu?: boolean;
  sectionInView: string;
}
export const MenuContainer = styled(motion.div)<MenuContainerProps>`
  display: none;
  transition: all.3s;
  transition-timing-function: ease-in-out;
  @media screen and (max-width: ${mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #00000062;
    justify-content: space-between;
    width: ${({ menu }) => (menu ? "100vw" : "50px")};
    min-width: 20px;
    height: ${({ menu }) => (menu ? "100vh" : "55vh")};
    padding-bottom: ${({ menu }) => (menu ? "30px" : "0")};
    position: fixed;
    right: 12px;
    top: 0;
    overflow: hidden;
    padding-top: ${({ menu }) => (menu ? "40px" : "80px")};
    box-shadow: 0px 0px 8px 0px #073018a4;
    border-bottom-left-radius: 14px;
    backdrop-filter: ${({ menu }) => (menu ? "blur(15px)" : "none")};
    z-index: 10;
    .nav-menu-button {
      display: flex;
      position: fixed;
      top: 35px;
      right: 22px;
      color: ${({ theme }) => theme.primaryFontColor};
      cursor: pointer;
    }
    .nav-menu-items {
      margin-top: ${({ menu }) => (menu ? "10%" : "30%")};
      display: flex;
      flex-direction: column;
      height: ${({ menu }) => (menu ? "90%" : "100%")};
      justify-content: space-around;

      .navLinks,
      .about-button {
        opacity: ${({ menu }) => (menu ? "1 !important" : ".3")};
        text-align: center;
        cursor: pointer;
        align-self: center;
        color: ${({ theme }) => theme.primaryFontColor};
        span {
          transition: all.3s;
          transition-timing-function: ease-in-out;
          font-size: ${({ menu }) => (menu ? "100%" : "0%")};
        }
        .navIndex {
          color: ${({ menu, theme }) =>
            menu ? theme.hoverFontColor : "inherit"};
          svg {
            height: 14px;
          }
        }
      }
      .navLinks[href="${({ sectionInView }) => sectionInView}"] {
        opacity: 0.7;
        color: ${({ theme }) => theme.hoverFontColor};
        &:before {
          width: 100%;
        }
      }
      .onlyFullMenu {
        display: flex;
        flex-direction: column;
        height: ${({ menu }) => (menu ? "30px" : "0")};
        font-size: ${({ menu }) => (menu ? "100%" : "0%")};
        align-items: center;
        transition: all.3s;
        transition-timing-function: ease-in-out;
        .socialsLink {
          margin-right: 10px;
          margin-top: 5px;
          color: ${({ menu, theme }) =>
            menu ? theme.hoverFontColor : "inherit"};
          svg {
            transition: all.3s;
            transition-timing-function: ease-in-out;
            height: ${({ menu }) => (menu ? "16px" : "0")};
          }
        }
      }
    }
  }
`;

export const PageOverview = styled.div<LayoutStyleProps>`
  position: fixed;
  top: 120px;
  right: 0;
  width: ${(props) => (props.hideOverview ? " 0" : " 15%")};
  opacity: ${(props) => (props.hideOverview ? "0" : " 1")};
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;

  .item {
    font-size: 12px;
    margin-left: 10%;
  }
`;

export const Socials = styled(motion.div)`
  position: fixed;
  bottom: 17%;
  left: -4%;
  transform: rotate(90deg);
  display: flex;
  font-size: 12px;
  align-items: center;
  width: 202px;
  .socialsLink {
    transform: rotate(-90deg);
    margin-left: 10px;
    &:hover {
      color: ${({ theme }) => theme.hoverFontColor};
      padding-right: 10px;
      padding-left: 10px;
      &::before {
        width: 0;
      }
    }
  }
  .emailLine {
    height: 1px;
    width: 100px;
    margin-left: 5px;
    background-color: ${({ theme }) => theme.primaryFontColor};
  }
  .emailCircle {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.primaryFontColor};
  }
  svg {
    height: 20px;
  }
`;
export const EmailDesign = styled(motion.div)`
  position: fixed;
  bottom: 17%;
  right: -3.5%;
  transform: rotate(90deg);
  display: flex;
  font-size: 12px;
  align-items: center;
  .emailLine {
    height: 1px;
    width: 60px;
    margin-left: 5px;
    background-color: ${({ theme }) => theme.primaryFontColor};
  }
  .emailCircle {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.primaryFontColor};
  }
`;
