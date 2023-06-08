import styled from "styled-components";
import { motion } from "framer-motion";
import { absCenter } from "../../styles/style_mixins";

export const NavContainer = styled(motion.div)`
  width: 60%;
  height: 100px;
  display: flex;
  ${absCenter};
  position: fixed;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  opacity: 0;
  top: 45%;
  align-content: end;
  backdrop-filter: blur(10px);
  padding: 0 5%;
  font-size: 13px;
  -webkit-box-pack: justify;
  z-index: 1;

  .navLinks {
    margin: 0px 5px;
    padding: 10px;
    .navIndex {
      font-size: 12px;
      margin-right: 3px;
      color: ${({ theme }) => theme.hoverFontColor};
      -webkit-text-fill-color: ${({ theme }) => theme.hoverFontColor};
    }
    &:hover .navIndex {
      transition: all 0.3s;
      margin-right: 6px;
    }
  }
  .logo {
    height: 50px;
    width: 50px;
    img {
      height: 100%;
    }
  }
  .unsplash {
    display: flex;
    justify-content: space-between;
  }
`;
