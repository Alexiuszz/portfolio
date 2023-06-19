import { motion } from "framer-motion";
import styled from "styled-components";

export const ExperienceContainer = styled(motion.div)`
  width: 70%;
  height: 300px;
  transition: all 0.5s;
  position: absolute;
  top: 0;
  bottom: 0;
  &.currentTab {
    transition: all 0.5s 0.3s;
    opacity: 1;
  }
  &.notCurrentTab {
    opacity: 0;
  }
  .role {
    font-size: 18px;
    .company {
      color: ${({ theme }) => theme.hoverFontColor};
    }
  }
  .workPeriod {
    font-size: 12px;
    font-style: italic;
  }
  .workContainer {
    margin-top: 10px;
    font-size: 14px;
  }
`;
