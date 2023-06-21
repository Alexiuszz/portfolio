import { absCenter } from "@/styles/style_mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectContainer = styled(motion.div)`
  background-color: #fff;
  width: 100%;
  height: 50%;
  min-height: 300px;
  ${absCenter};

`;
