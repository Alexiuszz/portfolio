import { motion } from "framer-motion";
import styled from "styled-components";

export const Switch = styled.div`
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

`;
export const Handle = styled(motion.div)`
  width: 40%;
  aspect-ratio:1/1;
  background-color: #868686;
  border-radius: 50%;
`;
