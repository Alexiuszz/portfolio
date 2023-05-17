import { keyframes } from "styled-components";

export const jiggle = keyframes`
  0%{
    transform: rotate(0deg);
  }
  33%{
    transform: rotate(2deg);
  }
  66%{
    transform: rotate(-2deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;
export const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;
export const bounce = keyframes`
  0% {
    transform: translateY(-3rem);
  }
  50% {
    transform: translateY(3rem);
  }
  100% {
    transform: translateY(-3rem);
  }
`;
export const point1 = keyframes`
  0%{
    /* transform: translateX(-60%) rotate(90) scale(100%,100%); */
    top:100%;
    height:40px;
    opacity:1;
  }
  50%{
    /* transform: translateX(-60%) rotate(90) scale(75%,75%); */
    top:140%;
    height:30px;    
    width: 15px;
    opacity:.5;
  }
 100%{
    /* transform: translateX(-90%)  rotate(90) scale(20%,20%); */
    top:190%;
    height:20px;    
    width: 10px;
    opacity:.1;
  }
 `;
export const point2 = keyframes`
0%{
  /* transform: translateX(-60%) rotate(90) scale(100%,100%); */
  top:110%;
  height:40px;
  opacity:1;
}
50%{
  /* transform: translateX(-60%) rotate(90) scale(75%,75%); */
  top:140%;
  height:30px;    
  width: 15px;
  opacity:.5;
}
100%{
  /* transform: translateX(-90%)  rotate(90) scale(20%,20%); */
  top:190%;
  height:20px;    
  width: 10px;
  opacity:.1;
}
`;

export const warning = keyframes`
  0%{
    
    transform: translateY(0rem);
  }
  50%{
    
    transform: translateY(0.3rem) ;
  }
  65%{
    
    transform: translateY(-0.1rem) rotateX('5deg') scale(1.5);
  }
  80%{
    
    transform: translateY(0.05rem) rotateX('-5deg')  scale(0.8);
  }
  100%{
    
    transform: translateY(0rem) rotateX('0deg') scale(1);
  }
`;
export const smallBounce = keyframes`
  0% {
    transform: translateY(0rem);
  }
  33% {
    transform: translateY(-0.5rem);
  }
  66% {
    transform: translateY(0.5rem);
  }
  100% {
    transform: translateY(0rem);
  }
`;

export const growWidth = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 60%;
  }
`;
