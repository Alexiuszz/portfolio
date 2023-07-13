import { motion } from "framer-motion";
import styled from "styled-components";

export const Switch = styled(motion.div)`
  width: 40px;
  height: 20px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 3px;
  cursor: pointer;
  &[data-ison="true"] {
    justify-content: flex-end;
  }
  &[data-ismenu="true"] {
    width: 25px;
    height: 25px;
    background-color: ${({theme})=> theme.tetiaryColor};
    border: ridge ${({theme})=> theme.tetiaryColor} 4px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-radius: 10px;
    padding: 3px;
    &[data-ison="true"] {
      justify-content: flex-end;
      align-items: flex-start;
    }
  }
`;

export const Handle = styled(motion.div)`
  width: 40%;
  aspect-ratio: 1/1;
  background-color: #868686;
  border-radius: 50%;
  &[data-ismenu="true"] {
    background-color: ${({ theme }) => theme.cursorColor};
    width: 50%;
    border-radius: 0%;
    clip-path: polygon(
      0% 85%,
      15% 100%,
      100% 100%,
      100% 50%,
      50% 50%,
      50% 0,
      0 0
    );
    &[data-ison="true"] {
      background-color: ${({ theme }) => theme.hoverFontColor};
    }
  }
`;
