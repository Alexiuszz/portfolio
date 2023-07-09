import { centerContent } from "@/styles/style_mixins";
import { mobile } from "@/styles/style_variables";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactContainer = styled(motion.section)`
  height: 100vh;
  scroll-snap-align: start;
  ${centerContent};
  position: relative;
  .contact-wrapper {
    margin-top: -40px;
    width: 70%;
    height: fit-content;
    ${centerContent};
    flex-direction: column;
    p {
      text-align: center;
    }
    h2 {
      font-size: 30px;
      margin-bottom: 40px;
    }
    .contactButton {
      font-size: 20px;
      padding: 20px;
      background-color: ${({ theme }) => theme.tetiaryColor};
      color: ${({ theme }) => theme.primaryFontColor};
      margin: 40px 0;
      &:hover {
        color: ${({ theme }) => theme.hoverFontColor};
      }
    }
  }
  .foot {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 4%;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    width: 100%;
    ${centerContent};
    p {
      font-family: cursive, "Gill Sans", "Gill Sans MT", Calibri,
        "Trebuchet MS", sans-serif;
    }
    .foot-socials {
      margin-top: 10px;
      .socialsLink {
        margin-right: 10px;
        &:hover {
          color: ${({ theme }) => theme.hoverFontColor};
          padding-right: 10px;
          padding-left: 10px;
          height: 18px;
          &::before {
            width: 0;
          }
        }
        svg {
          height: 16px;
        }
      }
    }
  }
  @media screen and (max-width: ${mobile}) {
    .contact-wrapper {
      margin-top: -60px;
    }
    .foot {
      bottom: 8%;
    }
  }
`;
