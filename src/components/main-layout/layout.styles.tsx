import { centerContent } from "@/styles/style_mixins";
import { mobile } from "@/styles/style_variables";
import { motion } from "framer-motion";
import styled from "styled-components";

interface LayoutStyleProps {
  hideOverview?: boolean;
  inView?: boolean;
}
export const MainLayout = styled.div<LayoutStyleProps>`
  background-image: linear-gradient(
      to right bottom,
      ${({ theme }) => theme.primaryColor},
      ${({ theme }) => theme.secondaryColor}
    ),
    url("/assets/images/bg-img.jpg");
  overflow-y: scroll;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-size: cover;
  background-position: top;
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
    .content{
      width: 90%;
      margin: 0 75px 0 13px;
    }
      .socials{
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
    height: 100px;
    width: 100px;
    .container {
      background: #fff;
      transform: rotate(-20deg);
      height: 100px;
      width: 100px;
      ${centerContent};
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
}
export const MenuContainer = styled(motion.div)<MenuContainerProps>`
  display: none;
  transition: all.3s;
  transition-timing-function: ease-in-out;
  @media screen and (max-width: ${mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.primaryColor};
    justify-content: space-between;
    width: ${({ menu }) => (menu ? "100vw" : "50px")};
    min-width: 20px;
    opacity: ${({ menu }) => (menu ? "1" : ".3")};
    height: ${({ menu }) => (menu ? "100vh" : "55vh")};
    position: fixed;
    right: 12px;
    top: 0;
    padding-top: 80px;
    box-shadow: 0px 0px 14px 0px #073018;
    border-bottom-left-radius: 14px;
    backdrop-filter: ${({ menu }) => (menu ? "blur(15px)" : "none")};
    z-index: ${({ menu }) => (menu ? "10000" : "0")};
    .nav-menu-items {
      margin-top: ${({ menu }) => (menu ? "20%" : "40%")};
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-around;
      .navLinks {
        text-align: center;
        cursor: pointer;
        span {
          transition: all.3s;
          transition-timing-function: ease-in-out;
          font-size: ${({ menu }) => (menu ? "100%" : "0%")};
        }
        .navIndex {
          svg {
            height: 14px;
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
