import { motion } from "framer-motion";
import styled from "styled-components";

export const ExperienceContainer = styled(motion.div)`
  width: 65%;
  height: 300px;
  .workPeriod {
    font-size: 12px;
    font-style: italic;
  }
  .workContainer {
    margin-top: 10px;
    font-size: 14px;
    li {
      margin-bottom: 5px;
    }
  }
`;
