import { swim } from "@/styles/keyframes";
import { mobile } from "@/styles/style_variables";
import styled from "styled-components";

export const LShape = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  transform: rotate(-180deg) scaleX(-1);
  height: 0;
  width: 0;
  display: inline-block;
  perspective: 1000px;
  z-index: 100;
  .gradient1 {
    stop-color: #0f8a5f;
    transition: all 0.3s ease-in-out;
  }

  .gradient2 {
    stop-color: #bc6014;
    transition: all 0.3s ease-in-out;
  }
  
  @media screen and (max-width: ${mobile}) {
    bottom: -13px;
    left: -13px;
  }
`;
