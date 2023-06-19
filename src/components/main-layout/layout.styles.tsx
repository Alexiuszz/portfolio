import { centerContent } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

interface LayoutStyleProps {
  hideOverview?: boolean;
  inView?: boolean;
}
export const MainLayout = styled.div<LayoutStyleProps>`
  overflow: hidden;
  background-image: linear-gradient(
      to right bottom,
      ${({ theme }) => theme.primaryColor},
      ${({ theme }) => theme.secondaryColor}
    ),
    url("/assets/images/bg-img.jpg");
  background-size: cover;
  background-position: top;
  .content {
    overflow: scroll;
    scrollbar-width: none;
    height: 100vh;
    width: ${(props) => (props.hideOverview ? "100%" : "75%")};
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    margin: 0 auto;
    section {
      width: 100%;
      overflow: hidden;
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
  left: 0;
`;
export const EmailDesign = styled(motion.div)`
  position: fixed;
  bottom: 17%;
  right: -5%;
  transform: rotate(90deg);
  display: flex;
  font-size: 12px;
  align-items: center;
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
  &:hover {
    transform: translateY() rotate(89deg);
  }
`;
