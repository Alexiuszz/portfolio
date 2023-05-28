import styled from "styled-components";
import { motion } from "framer-motion";
import { absCenter } from "../../styles/style_mixins";

export const NavContainer = styled(motion.div)`
  width: 60%;   
  height: 100px;
  display: grid;
  ${absCenter};
  position: fixed;
  background-color: rgba(214, 219, 220, 0);
  /* background-color: grey; */
  opacity: 0;
  top: 45%;
  grid-template-columns: 0.5fr minmax(10px, 2fr) 3fr;
  align-content: end; 
  padding: 0 10%;
  z-index: 2;
  .logo{
    height: 50px;
    width: 50px;
    img{
      height:100%;
    }
  }
  .unsplash {
    margin-left: 20%;
    display: flex;
    justify-content: space-between;
    grid-column: 3/3;
  }
`;
