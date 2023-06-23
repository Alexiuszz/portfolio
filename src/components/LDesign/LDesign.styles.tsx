import { swim } from "@/styles/keyframes";
import styled from "styled-components";

export const LShape = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  transform: rotate(-180deg) scaleX(-1);
  height: 200px;
  width: 50px;
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
`;
