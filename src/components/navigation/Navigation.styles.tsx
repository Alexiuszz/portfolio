import styled from "styled-components";
import { motion } from "framer-motion";
import { absCenter } from "../../styles/style_mixins";
import { mobile } from "../../styles/style_variables";

interface NavProps {
  scrollUp: boolean;
  isTop: boolean;
}
export const NavContainer = styled(motion.div)<NavProps>`
  width: 60%;
  height: 80px;
  display: flex;
  ${absCenter};
  position: fixed;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  opacity: 0;
  top: 0;
  align-content: end;
  padding: 0 5%;
  font-size: 13px;
  -webkit-box-pack: justify;
  z-index: 1;
  backdrop-filter: ${({ isTop }) => (!isTop ? "blur(10px)" : "none")};
  box-shadow: ${({ isTop }) =>
    !isTop ? "0px 0px 14px 0px #073018" : "none"};
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
  .nav-menu-button {
    display: none;
  }
  @media screen and (max-width: ${mobile}) {
    .unsplash{
      display: none;
    }
    .nav-menu-button{
      display: flex;
      margin-right: 20px;
    }
  }
`;
